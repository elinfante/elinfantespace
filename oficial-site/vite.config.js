import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

console.log("NODE_ENV => ", process.env.NODE_ENV);
let BASE_URL = process.env.NODE_ENV === "production" ? "/" : "/";

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: BASE_URL,
  plugins: [vue()],
  resolve: {
    alias: {
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/",
  build: {
    chunkSizeWarningLimit: 3000,
    outDir: "dist", // Output directory for production build
    minify: true, // Enable minification for production
    sourcemap: false, // Disable source maps in production (optional)
  },
});
