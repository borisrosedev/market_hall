/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: { reporter: ["text", "json", "html"] },
  },
  server: {
    proxy: {
      "/api/v1": {
        target: "http://localhost:5000",
        changeOrigin: true,
        timeout: 0,
        proxyTimeout: 0,
      },
    },
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
    watch: { usePolling: true },
  },
});
