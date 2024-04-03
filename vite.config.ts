/// <reference types="vitest" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "node:path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./test/test-setup.ts",
    css: true,
  },
  resolve: {
    alias: {
      "#type": path.resolve(__dirname, "./src/type"),
      "#component": path.resolve(__dirname, "./src/component"),
    },
  },
})
