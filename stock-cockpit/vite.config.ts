import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" lets the same build run from GitHub Pages (a subfolder) and inside the Capacitor app.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
