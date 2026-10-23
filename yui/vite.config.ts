import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base を相対にして、どのフォルダに置いても（将来のアプリ化でも）そのまま開けるようにする
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: { chunkSizeWarningLimit: 1500 },
});
