import { cpSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Copies the built web app to <repo root>/stock/ so GitHub Pages serves it at .../stock/
const here = join(dirname(fileURLToPath(import.meta.url)), "..");
const out = join(here, "..", "stock");

rmSync(out, { recursive: true, force: true });
cpSync(join(here, "dist"), out, { recursive: true });
console.log("../stock/ にWeb版を書き出しました");
