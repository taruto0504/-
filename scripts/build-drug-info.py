#!/usr/bin/env python3
"""PMDA から取得した添付文書データ(pmda.jsonl)を、アプリ用の data/drug-info/*.json に変換する。

使い方:
  git fetch origin pmda-data
  git show origin/pmda-data:pmda.jsonl > /tmp/pmda.jsonl
  python3 scripts/build-drug-info.py /tmp/pmda.jsonl

pmda.jsonl は .github/workflows/fetch-pmda.yml(scripts/fetch-pmda.py)が作る。
ファイルは YJコードの上3桁(薬効分類)ごとに分け、薬を開いたときに必要な分だけ読み込む。
"""
import json
import os
import re
import shutil
import sys

ROOT = os.path.join(os.path.dirname(__file__), "..")
OUT_DIR = os.path.join(ROOT, "data", "drug-info")
KEYS = ["warn", "contra", "ind", "dose", "app"]


def clean_rev(rev):
    m = re.search(r"\d{4}年\d{1,2}月(?:改訂|作成)(?:\([^)]*\))?", rev or "")
    return m.group(0) if m else ""


def main(src):
    records = {}
    with open(src, encoding="utf-8") as f:
        for line in f:
            rec = json.loads(line)
            records[rec["yj"]] = rec  # a later line (re-fetch) wins

    # Every class in the drug list gets a file (possibly empty) so the app never hits a 404.
    src_list = open(os.path.join(ROOT, "js", "drug-list.js"), encoding="utf-8").read()
    drug_list = json.loads(src_list[src_list.index("{"): src_list.rindex("}") + 1])
    chunks = {yj[:3]: {} for _, groups in drug_list["items"] for yj, _, _ in groups}
    empty = 0
    for yj, rec in sorted(records.items()):
        rows = [[r[0], list(dict.fromkeys(r[1]))] for r in rec.get("rows", [])]
        info = {"ins": rows}
        if rec.get("rep"):
            info["rep"] = rec["rep"]
            info["repNames"] = next((r[1] for r in rows if r[0] == rec["rep"]), [])
            info["rev"] = clean_rev(rec.get("rev"))
        for k in KEYS:
            # drop leftovers of empty table cells from older fetches
            lines = [re.sub(r"(\s*/)+$", "", l).strip() for l in rec.get(k) or []]
            lines = [l for l in lines if l and not re.fullmatch(r"[\s/|・、。.,-]+", l)]
            if lines:
                info[k] = lines
        if not any(k in info for k in KEYS):
            empty += 1
        chunks.setdefault(yj[:3], {})[yj] = info

    if os.path.isdir(OUT_DIR):
        shutil.rmtree(OUT_DIR)
    os.makedirs(OUT_DIR)
    total = 0
    for prefix, data in chunks.items():
        path = os.path.join(OUT_DIR, prefix + ".json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, separators=(",", ":"))
        total += os.path.getsize(path)
    print(f"{len(records)} 製剤(本文なし {empty}) -> {len(chunks)} ファイル, 合計 {total:,} bytes")


if __name__ == "__main__":
    main(sys.argv[1])
