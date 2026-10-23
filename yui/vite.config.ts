import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base を相対にして、どのフォルダに置いても（将来のアプリ化でも）そのまま開けるようにする。
// ビルド結果は app/ に出し、リポジトリに含めて GitHub Pages（…/yui/app/）で公開する
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: { outDir: "app", emptyOutDir: true, chunkSizeWarningLimit: 1500 },
});
