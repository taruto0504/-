#!/usr/bin/env python3
"""PMDA の医療用医薬品ページから、添付文書(電子添文)の主要項目を取得する。

js/drug-list.js の各製剤(YJコード上7桁)について
  1. 成分ページ  /PmdaSearch/iyakuDetail/GeneralList/{YJ7}   … 製品と添付文書の一覧
  2. 先頭の製品の添付文書HTML  /PmdaSearch/iyakuDetail/{添付文書ID}
を順番に取得し、添付文書の主な項目(SECTIONS)を JSON Lines で保存する。
薬物動態・臨床成績・薬効薬理・理化学的知見・文献などは量が多いため取り込まず、PDF へのリンクで見てもらう。

- サーバーに負担をかけないよう、1件ずつ間隔(--delay 秒)をあけて取得する。
- 出力ファイルに同じ VERSION で取得済みの製剤は飛ばすので、途中で止まっても続きから再開できる。
  取り込む項目を変えたときは VERSION を上げると、全製剤を順に取り直す(後の行が優先される)。
- --budget 秒を過ぎたら途中で終了し、status.txt に partial と書く(全件終われば complete)。
- PMDA の成分ページに製品が載っていない製剤(発売直後の新薬など)は、KEGG MEDICUS(JAPIC の添付文書情報)を
  製品名で検索し、YJコードが一致する添付文書があればそこから取り込む(kegg に JAPIC コードを保存)。

.github/workflows/fetch-pmda.yml から実行する。必要なライブラリ: beautifulsoup4, lxml
"""
import argparse
import http.cookiejar
import json
import os
import re
import sys
import time
import unicodedata
import urllib.parse
import urllib.request

from bs4 import BeautifulSoup, NavigableString

BASE = "https://www.pmda.go.jp/PmdaSearch/iyakuDetail/"
KEGG = "https://www.kegg.jp/medicus-bin/"
UA = "medical-support-tool/1.0 (+https://github.com/taruto0504/-)"

VERSION = 2
# 見出しの番号 -> 保存するキー(新記載要領)
SECTIONS = {
    "1": "warn", "2": "contra", "3": "comp", "4": "ind", "5": "indNote", "6": "dose", "7": "doseNote",
    "8": "basic", "9": "bg", "10": "inter", "11": "adv", "12": "lab", "13": "od", "14": "app", "15": "other",
    "20": "handle",
}
# 旧記載要領の見出し
OLD_SECTIONS = {
    "警告": "warn", "禁忌": "contra", "原則禁忌": "contra2", "組成・性状": "comp",
    "効能・効果": "ind", "効能又は効果": "ind", "用法・用量": "dose", "用法及び用量": "dose",
    "使用上の注意": "caution", "適用上の注意": "app", "取扱い上の注意": "handle",
}
BLOCK = {"div", "p", "li", "ul", "ol", "h1", "h2", "h3", "h4", "table", "tr", "caption", "dl", "dt", "dd"}

opener = urllib.request.build_opener(urllib.request.HTTPCookieProcessor(http.cookiejar.CookieJar()))
opener.addheaders = [("User-Agent", UA), ("Accept-Language", "ja")]


def nfkc(s):
    return unicodedata.normalize("NFKC", s)


def get(url, delay):
    for attempt in range(4):
        time.sleep(delay if attempt == 0 else delay * 5 * attempt)
        try:
            with opener.open(url, timeout=40) as r:
                return r.read().decode("utf-8", errors="replace")
        except Exception as e:  # noqa: BLE001 - network errors of any kind are retried
            print(f"  retry {attempt + 1}: {url} ({e})", flush=True)
    return None


def general_rows(html):
    rows = []
    for tr in re.findall(r"<tr class='table(?:UsualEven|NoEven)'>(.*?)</tr>", html, re.S):
        m_id = re.search(r'detailDisp\("PmdaSearch", "([^"]+)"\)', tr)
        if not m_id:
            continue
        m_names = re.search(r'popUp\("([^"]*)"\)', tr)
        cells = re.findall(r"<td[^>]*>(.*?)</td>", tr, re.S)
        company = re.sub(r"<br\s*/?>", " ", cells[1]) if len(cells) > 1 else ""
        company = re.sub(r"<[^>]+>", "", company).strip()
        names = [nfkc(n).strip() for n in (m_names.group(1) if m_names else "").split("／") if n.strip()]
        rows.append([m_id.group(1), names, nfkc(company)])
    return rows


def flatten_tables(el):
    """Each table row becomes one line, its non-empty cells joined with " / " (inner tables first)."""
    for table in reversed(el.find_all("table")):
        rows = []
        caption = table.find("caption")
        if caption and caption.get_text(strip=True):
            rows.append(caption.get_text(" ", strip=True))
        for tr in table.find_all("tr"):
            if tr.find_parent("table") is not table:
                continue
            cells = [re.sub(r"\s+", " ", c.get_text(" ", strip=True)) for c in tr.find_all(["td", "th"], recursive=False)]
            cells = [c for c in cells if c]
            if cells:
                rows.append(" / ".join(cells))
        table.replace_with(NavigableString("\n" + "\n".join(rows) + "\n"))


def to_lines(el):
    """Section HTML -> list of text lines (one per list item / paragraph / table row)."""
    for ref in el.select("a.HeaderRef, a.CommentRefNum, script, style"):
        ref.decompose()
    for br in el.find_all("br"):
        br.replace_with(NavigableString("\n"))
    flatten_tables(el)
    for tag in el.find_all(BLOCK):
        tag.insert_before(NavigableString("\n"))
        tag.insert_after(NavigableString("\n"))
    lines = []
    for line in el.get_text("").split("\n"):
        line = re.sub(r"\s+", " ", nfkc(line)).strip()
        if line and not re.fullmatch(r"[\s/|・、。.,-]+", line):
            lines.append(line)
    return lines


def parse_insert(html):
    soup = BeautifulSoup(html, "lxml")
    out = {}
    rev = soup.find(id="HDR_DateOfPreparationOrRevision")
    if rev:
        lines = to_lines(rev)
        out["rev"] = " ".join(lines[1:]) if len(lines) > 1 else ""
    found = False
    for sec in soup.select('div.section[data-level="1"]'):
        h3 = sec.find("h3", class_="section_header")
        if not h3:
            continue
        m = re.match(r"\s*(\d+)\s*\.", nfkc(h3.get_text()))
        key = m and SECTIONS.get(m.group(1))
        if not key:
            continue
        h3.decompose()
        out[key] = to_lines(sec)
        found = True
    if not found:
        # 旧記載要領: 【警告】【禁忌】… の見出し
        text_lines = to_lines(soup.find(id="ResultSet") or soup)
        current = None
        for line in text_lines:
            m = re.match(r"^【(.+?)】\s*(.*)$", line)
            if m:
                title = re.sub(r"[(（].*$", "", m.group(1))
                current = OLD_SECTIONS.get(title)
                if current:
                    out.setdefault(current, [])
                    if m.group(2):
                        out[current].append(m.group(2))
                    found = True
                continue
            if current:
                out[current].append(line)
        if found:
            out["fmt"] = "old"
    return out


def kegg_codes(html):
    """JAPIC codes of the products on a KEGG MEDICUS search result page."""
    return list(dict.fromkeys(re.findall(r"japic_med\?japic_code=(\d+)", html)))


def parse_kegg(html, yj):
    """KEGG MEDICUS insert page -> same keys as parse_insert, or None when no product on it has this YJ code."""
    soup = BeautifulSoup(html, "lxml")
    th = soup.find("th", string="YJコード")
    if not th:
        return None
    table = th.find_parent("table")
    col = [c.get_text(strip=True) for c in th.find_parent("tr").find_all(["th", "td"])].index("YJコード")
    names = []
    for tr in table.find_all("tr")[1:]:
        cells = [c.get_text(" ", strip=True) for c in tr.find_all(["th", "td"])]
        if len(cells) > col and nfkc(cells[col]).startswith(yj):
            names.append(nfkc(cells[0]))
    if not names:
        return None
    out = {"names": names}
    rev = soup.select_one("h3 .revision")
    if rev:
        out["rev"] = nfkc(rev.get_text(strip=True))
    for h4 in soup.select("h4.contents-title"):
        hid = h4.get("id") or ""
        num = "3" if hid == "products" else hid[4:] if hid.startswith("par-") else ""
        key = SECTIONS.get(num)
        if not key:
            continue
        box = BeautifulSoup("<div></div>", "lxml").div
        for sib in list(h4.find_next_siblings()):
            if sib.name == "h4" and "contents-title" in (sib.get("class") or []):
                break
            if sib.name in ("h3", "hr"):
                break
            box.append(sib)
        lines = to_lines(box)
        if lines:
            out[key] = lines
    return out


def from_kegg(yj, products, delay):
    """Search KEGG MEDICUS by product name for an insert with this YJ code."""
    tried = set()
    for name in list(dict.fromkeys(products))[:3]:
        q = re.sub(r"\s+", "", name)
        html = get(KEGG + "search_drug?display=med&search_keyword=" + urllib.parse.quote(q), delay)
        for code in kegg_codes(html or "")[:5]:
            if code in tried:
                continue
            tried.add(code)
            page = get(KEGG + "japic_med?japic_code=" + code, delay)
            info = page and parse_kegg(page, yj)
            if info:
                info["kegg"] = code
                return info
    return None


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--list", default="js/drug-list.js")
    ap.add_argument("--extra", default="js/drug-list-extra.js", help="薬価基準にない薬の一覧(あれば一緒に取得する)")
    ap.add_argument("--out", required=True)
    ap.add_argument("--delay", type=float, default=1.0)
    ap.add_argument("--budget", type=float, default=5 * 3600)
    ap.add_argument("--limit", type=int, default=0)
    ap.add_argument("--only", help="file with YJ7 codes to fetch again (one per line), even if already fetched")
    args = ap.parse_args()

    items = []
    for path in (args.list, args.extra):
        if os.path.exists(path):
            src = open(path, encoding="utf-8").read()
            items += json.loads(src[src.index("{"): src.rindex("}") + 1])["items"]
    groups = list(dict.fromkeys(yj for _, gs in items for yj, _, _ in gs))
    products = {}
    for _, gs in items:
        for yj, _, ps in gs:
            products.setdefault(yj, []).extend(p[0] for p in ps)

    done = set()
    if os.path.exists(args.out):
        with open(args.out, encoding="utf-8") as f:
            for line in f:
                try:
                    rec = json.loads(line)
                    # an empty product list from PMDA counts as done once KEGG has been tried too
                    if rec.get("v") == VERSION and (rec.get("rows") or "kegg_tried" in rec):
                        done.add(rec["yj"])
                except (ValueError, KeyError):
                    pass
    if args.only:
        only = {line.strip() for line in open(args.only) if line.strip()}
        todo = [g for g in dict.fromkeys(groups) if g in only]
    else:
        todo = [g for g in groups if g not in done]
    if args.limit:
        todo = todo[: args.limit]
    print(f"{len(groups)} 製剤 / 取得済み {len(done)} / 今回 {len(todo)}", flush=True)

    start = time.time()
    status = "complete"
    with open(args.out, "a", encoding="utf-8") as out:
        for n, yj in enumerate(todo, 1):
            if time.time() - start > args.budget:
                status = "partial"
                break
            rec = {"yj": yj, "v": VERSION}
            html = get(BASE + "GeneralList/" + yj, args.delay)
            if html is None:
                print(f"skip {yj}: GeneralList failed", flush=True)
                continue
            rows = general_rows(html)
            rec["rows"] = rows
            if rows:
                # The brand product (no 「会社名」 in its name) usually has the fullest insert; otherwise the first row.
                rep = next((r[0] for r in rows if r[1] and not any("「" in n for n in r[1])), rows[0][0])
                ins = get(BASE + rep, args.delay)
                if ins is None:
                    print(f"skip {yj}: insert {rep} failed", flush=True)
                    continue
                rec["rep"] = rep
                rec.update(parse_insert(ins))
            else:
                rec["kegg_tried"] = True
                info = from_kegg(yj, products[yj], args.delay)
                if info:
                    rec.update(info)
            out.write(json.dumps(rec, ensure_ascii=False) + "\n")
            out.flush()
            if n % 50 == 0:
                print(f"{n}/{len(todo)} {yj} ({time.time() - start:.0f}s)", flush=True)
    with open(os.path.join(os.path.dirname(args.out) or ".", "status.txt"), "w") as f:
        f.write(status + "\n")
    print("status:", status)


if __name__ == "__main__":
    sys.exit(main())
