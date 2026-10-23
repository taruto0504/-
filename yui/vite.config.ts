import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json" with { type: "json" };

// base を相対にして、どのフォルダに置いても（将来のアプリ化でも）そのまま開けるようにする。
// ビルド結果は app/ に出し、リポジトリに含めて GitHub Pages（…/yui/app/）で公開する
export default defineConfig({
  base: "./",
  plugins: [react()],
  define: { __APP_VERSION__: JSON.stringify(pkg.version) },
  build: { outDir: "app", emptyOutDir: true, chunkSizeWarningLimit: 1500 },
});
