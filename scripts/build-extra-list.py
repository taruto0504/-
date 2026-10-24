#!/usr/bin/env python3
"""薬価基準に載っていない医療用医薬品(ワクチンなど)の製剤一覧を KEGG MEDICUS から作る。

予防接種のワクチンなどは保険給付の対象外のため、厚生労働省の薬価基準リスト(js/drug-list.js)に載らない。
KEGG の「日本の医薬品分類」(br:jp08301)から TARGET の薬効分類の成分を拾い、
成分ごとの商品一覧 → 各商品の添付文書ページの YJコードをたどって、薬価基準にない製剤だけを
js/drug-list.js と同じ形式で出力する。添付文書の取り込みは scripts/fetch-pmda.py が行う。

使い方(KEGG に接続できる環境で):
  python3 scripts/build-extra-list.py --out drug-list-extra.json

.github/workflows/build-extra-list.yml から実行し、extra-list ブランチに保存する。
アプリ用の js/drug-list-extra.js への変換は --js で行う。
"""
import argparse
import json
import os
import re
import sys
import time
import unicodedata
import urllib.parse
import urllib.request

from bs4 import BeautifulSoup

ROOT = os.path.join(os.path.dirname(__file__), "..")
KEGG = "https://www.kegg.jp/medicus-bin/"
BRITE = "https://rest.kegg.jp/get/br:jp08301"
UA = "medical-support-tool/1.0 (+https://github.com/taruto0504/-)"
# ワクチン類・毒素及びトキソイド類・抗毒素類・その他の生物学的製剤
TARGET = ("631", "632", "633", "639")
# 分類表に成分が載っていない混合ワクチンなどは、キーワード検索でも拾う
KEYWORDS = ("ワクチン", "トキソイド", "抗毒素", "ツベルクリン")


def nfkc(s):
    return unicodedata.normalize("NFKC", s)


def get(url, delay):
    for attempt in range(4):
        time.sleep(delay if attempt == 0 else delay * 5 * attempt)
        try:
            req = urllib.request.Request(url, headers={"User-Agent": UA, "Accept-Language": "ja"})
            with urllib.request.urlopen(req, timeout=40) as r:
                return r.read().decode("utf-8", errors="replace")
        except Exception as e:  # noqa: BLE001 - network errors of any kind are retried
            print(f"  retry {attempt + 1}: {url} ({e})", flush=True)
    return None


def brite_drugs(text):
    """KEGG DRUG entries (D番号, 名前) under the TARGET classes of br:jp08301."""
    out, cls = [], None
    for line in text.splitlines():
        m = re.match(r"^C\s+(\d{3})\s", line)
        if m:
            cls = m.group(1)
            continue
        if line.startswith(("A", "B")):
            cls = None
        m = re.match(r"^E\s+(D\d{5})\s+(.*)$", line)
        if m and cls in TARGET:
            name = re.sub(r"\s*\((?:JP\d+|JAN)\)", "", m.group(2).split(";")[0]).strip()
            out.append((m.group(1), nfkc(name)))
    return list(dict.fromkeys(out))


def kubun(names):
    text = " ".join(names)
    if re.search(r"経口|内用", text):
        return "内"
    if re.search(r"点鼻|経鼻|膀胱内|皮内用.*ツベルクリン", text):
        return "外"
    return "注"


def product_rows(html):
    """(販売名, YJコード) of the products on a KEGG MEDICUS insert page."""
    soup = BeautifulSoup(html, "lxml")
    th = soup.find("th", string="YJコード")
    if not th:
        return []
    header = [c.get_text(strip=True) for c in th.find_parent("tr").find_all(["th", "td"])]
    col = header.index("YJコード")
    rows = []
    for tr in th.find_parent("table").find_all("tr")[1:]:
        cells = [nfkc(c.get_text(" ", strip=True)) for c in tr.find_all(["th", "td"])]
        # products without a price have letters in the ingredient part too (e.g. 631140BD3027)
        if len(cells) > col and re.match(r"^\d{4}[0-9A-Z]{3}", cells[col]):
            rows.append((cells[0], cells[col]))
    return rows


def generic_name(html):
    """一般名 (or 総称名 when there is none) on a KEGG MEDICUS insert page."""
    soup = BeautifulSoup(html, "lxml")
    for key in ("一般名", "総称名"):
        th = soup.find("th", string=key)
        td = th and th.find_next_sibling("td")
        if td and td.get_text(strip=True):
            return nfkc(td.get_text(" ", strip=True))
    return None


def search_codes(keyword, delay):
    """JAPIC codes of every result page of a KEGG MEDICUS keyword search."""
    codes, page = [], 1
    while page <= 20:
        html = get(KEGG + "search_drug?" + urllib.parse.urlencode({"display": "med", "page": page, "search_keyword": keyword}), delay) or ""
        found = re.findall(r"japic_med\?japic_code=(\d+)", html)
        codes += found
        if not found or f'data-page="{page + 1}"' not in html:
            break
        page += 1
    return list(dict.fromkeys(codes))


def load_list(path):
    src = open(path, encoding="utf-8").read()
    return json.loads(src[src.index("{"): src.rindex("}") + 1])


def build(delay, debug_dir=None):
    listed = {yj for _, groups in load_list(os.path.join(ROOT, "js", "drug-list.js"))["items"] for yj, _, _ in groups}
    drugs = brite_drugs(get(BRITE, delay) or "")
    print(f"{len(drugs)} 成分", flush=True)
    # (JAPIC code, ingredient name or None to read it from the page)
    sources = []
    for d, name in drugs:
        html = get(KEGG + "similar_product?kegg_drug=" + d, delay) or ""
        codes = list(dict.fromkeys(re.findall(r"japic_med\?japic_code=(\d+)", html)))
        sources += [(code, name) for code in codes]
        print(f"{d} {name}: {len(codes)} 商品", flush=True)
    for keyword in KEYWORDS:
        codes = search_codes(keyword, delay)
        sources += [(code, None) for code in codes]
        print(f"「{keyword}」: {len(codes)} 商品", flush=True)
    items = {}
    owner = {}  # YJ7 -> ingredient name it is listed under
    seen = set()
    for code, name in sources:
        if code in seen:
            continue
        seen.add(code)
        page = get(KEGG + "japic_med?japic_code=" + code, delay) or ""
        rows = [(p, yj[:7]) for p, yj in product_rows(page) if yj[:7] not in listed]
        if not product_rows(page) and debug_dir and len(os.listdir(debug_dir)) < 5:
            open(os.path.join(debug_dir, code + ".html"), "w", encoding="utf-8").write(page)
        if not rows:
            continue
        name = name or generic_name(page) or rows[0][0]
        for product, yj7 in rows:
            groups = items.setdefault(owner.setdefault(yj7, name), {})
            groups.setdefault(yj7, [])
            if product not in groups[yj7]:
                groups[yj7].append(product)
    out = []
    for name, groups in sorted(items.items()):
        out.append([name, [[yj7, kubun(products), [[p, ""] for p in products]] for yj7, products in sorted(groups.items())]])
    return out


def write_js(items, path):
    data = {
        "source": {"label": "KEGG MEDICUS(薬価基準に収載のない医療用医薬品)", "url": "https://www.kegg.jp/kegg/medicus/"},
        "items": items,
    }
    with open(path, "w", encoding="utf-8") as f:
        f.write("// 自動生成ファイル(scripts/build-extra-list.py)。直接編集しないでください。\n")
        f.write("// 薬価基準に載っていない医療用医薬品(ワクチンなど)。items の形式は js/drug-list.js と同じ。\n")
        f.write("window.DRUG_LIST_EXTRA = " + json.dumps(data, ensure_ascii=False, separators=(",", ":")) + ";\n")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", help="KEGG から作った一覧(JSON)の保存先")
    ap.add_argument("--js", help="保存済みの一覧(JSON)を js/drug-list-extra.js に変換する")
    ap.add_argument("--delay", type=float, default=1.0)
    ap.add_argument("--debug-dir", help="YJコードを読み取れなかったページを保存する(5件まで)")
    args = ap.parse_args()
    if args.js:
        write_js(json.load(open(args.js, encoding="utf-8")), os.path.join(ROOT, "js", "drug-list-extra.js"))
        return
    if args.debug_dir:
        os.makedirs(args.debug_dir, exist_ok=True)
    items = build(args.delay, args.debug_dir)
    with open(args.out, "w", encoding="utf-8") as f:
        json.dump(items, f, ensure_ascii=False, indent=1)
    print(f"{len(items)} 成分 / {sum(len(g) for _, g in items)} 製剤")


if __name__ == "__main__":
    sys.exit(main())
