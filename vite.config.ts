/// <reference types="vitest" />

import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import path from "node:path"

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["./test/**/*.test.{ts,tsx}"],
    setupFiles: "./test/test-setup.ts",
    globals: true,
    environment: "jsdom",
    css: true,
  },
  resolve: {
    alias: {
      "#type": path.resolve(__dirname, "./src/type"),
      "#component": path.resolve(__dirname, "./src/component"),
    },
  },
})
