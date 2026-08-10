import { resolve } from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    outDir: "pages-dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "pages-src/index.html"),
        privacy: resolve(__dirname, "pages-src/privacy/index.html"),
      },
    },
  },
});
