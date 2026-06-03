import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        downloads: resolve(__dirname, "downloads.html"),
        "version-compatibility": resolve(
          __dirname,
          "version-compatibility.html",
        ),
        credits: resolve(__dirname, "credits.html"),
      },
    },
  },
});
