import { cpSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "www");

// service-worker.js is left out on purpose: inside the app its cache-first
// strategy would keep serving old files after an app update.
const entries = ["index.html", "drip-oxygen.html", "timer.html", "calculator.html", "terms.html", "manifest.json", "css", "js", "icons"];

rmSync(out, { recursive: true, force: true });
mkdirSync(out);
for (const entry of entries) {
  cpSync(join(root, entry), join(out, entry), { recursive: true });
}
console.log("www/ を作成しました");
