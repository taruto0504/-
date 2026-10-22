// 端末内OCRの部品（Tesseract）と日本語・英語の文字データを node_modules から vendor/tesseract/ にコピーする。
// Web版（GitHub Pages）でもそのまま動くよう、コピーした結果はリポジトリに含める。
import { cpSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const nm = join(root, "node_modules");
const out = join(root, "vendor", "tesseract");

rmSync(out, { recursive: true, force: true });
mkdirSync(join(out, "lang"), { recursive: true });

cpSync(join(nm, "tesseract.js/dist/tesseract.min.js"), join(out, "tesseract.min.js"));
cpSync(join(nm, "tesseract.js/dist/worker.min.js"), join(out, "worker.min.js"));
// 端末の対応状況に合わせて自動で選ばれる3種類（文字認識はLSTM方式のみ使う）
for (const core of ["tesseract-core-lstm.wasm.js", "tesseract-core-simd-lstm.wasm.js", "tesseract-core-relaxedsimd-lstm.wasm.js"]) {
  cpSync(join(nm, "tesseract.js-core", core), join(out, core));
}
// 小さく速い best_int 版の文字データ
for (const lang of ["jpn", "eng"]) {
  cpSync(join(nm, `@tesseract.js-data/${lang}/4.0.0_best_int/${lang}.traineddata.gz`), join(out, "lang", `${lang}.traineddata.gz`));
}
cpSync(join(nm, "tesseract.js/LICENSE.md"), join(out, "LICENSE-tesseract.js.md"));
cpSync(join(nm, "tesseract.js-core/LICENSE"), join(out, "LICENSE-tesseract.js-core"));
console.log("vendor/tesseract/ を作成しました");
