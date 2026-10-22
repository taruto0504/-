// アプリ版（Capacitor）に入れる www/ を作る
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "www");

// service-worker.js はアプリ版では使わない（アプリ更新後も古いファイルを返してしまうため）
const entries = ["index.html", "manifest.json", "css", "js", "icons", "config", "vendor"];
if (!existsSync(join(root, "vendor", "tesseract"))) {
  console.error("vendor/tesseract がありません。先に npm run vendor を実行してください");
  process.exit(1);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out);
for (const entry of entries) cpSync(join(root, entry), join(out, entry), { recursive: true });

// Web版の Content-Security-Policy は、Android で Capacitor が差し込むスクリプトを止めてしまうため外す
const html = join(out, "index.html");
writeFileSync(html, readFileSync(html, "utf8").replace(/<meta http-equiv="Content-Security-Policy"[^>]*>\n/, ""));
console.log("www/ を作成しました");
