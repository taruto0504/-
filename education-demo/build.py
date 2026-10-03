# education/index.html から、claude.ai アーティファクト用のデモ版(medical-education-demo.html)を作る
# 使い方: python3 education-demo/build.py
import re, sys
import os
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, '..', 'education', 'index.html')
DIR = HERE + os.sep
s = open(SRC, encoding='utf-8').read()

style = re.search(r'<style>.*?</style>', s, re.S).group(0)
body = re.search(r'<body>\n(.*)\n</body>\s*</html>\s*$', s, re.S).group(1)

# Firebase の読み込み(外部サイト)をなくす
body, n = re.subn(r'<script type="module">.*?</script>\n', '', body, count=1, flags=re.S)
assert n == 1
# Service Worker の登録をなくす
body, n = re.subn(r"if\('serviceWorker' in navigator && location\.protocol==='https:'\)\{\n.*?\n\}\n", '', body, count=1, flags=re.S)
assert n == 1
# 音声入力はこのページでは使えない
body, n = re.subn(r"const HAS_SPEECH = [^\n]*", "const HAS_SPEECH = false; // デモ版(アーティファクト)ではマイクを使えない", body, count=1)
assert n == 1

demo_css = """<style>
  /* デモ版だけの表示 */
  :root{ color-scheme:light; }
  .demo-banner{ background:#FDF2E1; color:#7A4E0E; font-size:12px; line-height:1.6; padding:8px 16px; text-align:center; border-bottom:1px solid #F1D9B0; }
  .demo-banner b{ font-weight:800; margin-right:6px; }
  @media (min-width:900px){ .demo-banner{ padding-left:248px; } }
  .demo-print{ position:fixed; inset:0; z-index:100; background:rgba(16,42,67,.55); display:flex; flex-direction:column; padding:env(safe-area-inset-top,0px) 0 env(safe-area-inset-bottom,0px); }
  .demo-print-bar{ display:flex; align-items:center; gap:10px; flex-wrap:wrap; background:#0D47A1; color:#fff; padding:10px 16px; font-size:13px; }
  .demo-print-bar span{ opacity:.85; font-size:12px; }
  .demo-print-bar button{ margin-left:auto; border:none; border-radius:999px; background:#fff; color:#0D47A1; font-weight:800; padding:8px 16px; cursor:pointer; font-family:inherit; }
  .demo-print iframe{ flex:1; width:100%; border:0; background:#E9EDF2; }
</style>"""
banner = '<div class="demo-banner"><b>デモ版</b>サンプルデータで動いています。入力した内容は保存されず、ページを閉じると消えます。</div>\n'
demo_js = open(DIR + 'demo.js', encoding='utf-8').read()

out = (
  '<title>医療教育アプリ デモ</title>\n'
  + style + '\n' + demo_css + '\n'
  + banner
  + body.rstrip() + '\n<script>\n' + demo_js + '\n</script>\n'
)
assert 'gstatic.com' not in out and not out.lstrip().lower().startswith('<!doctype')
open(DIR + 'medical-education-demo.html', 'w', encoding='utf-8').write(out)
print('built', len(out))
