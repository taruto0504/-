import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(root, "www");

// service-worker.js is left out on purpose: inside the app its cache-first
// strategy would keep serving old files after an app update.
const entries = ["index.html", "drip-oxygen.html", "timer.html", "calculator.html", "terms.html", "drugs.html", "vital-assess.html", "vital.html", "ecg.html", "manifest.json", "css", "js", "icons", "data"];

rmSync(out, { recursive: true, force: true });
mkdirSync(out);
for (const entry of entries) {
  if (!existsSync(join(root, entry))) continue; // data/ appears once the PMDA insert data is built
  cpSync(join(root, entry), join(out, entry), { recursive: true });
}
// The web pages carry a Content-Security-Policy, but Capacitor injects its bridge as an
// inline script on Android, which that policy would block. The app only loads its own
// bundled files, so the policy is dropped from the app build.
for (const name of readdirSync(out).filter((f) => f.endsWith(".html"))) {
  const file = join(out, name);
  writeFileSync(file, readFileSync(file, "utf8").replace(/<meta http-equiv="Content-Security-Policy"[^>]*>\n/, ""));
}
console.log("www/ を作成しました");
