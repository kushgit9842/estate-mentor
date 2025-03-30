import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: false, // Don't fail build on eslint errors
      failOnWarning: false, // Don't fail build on eslint warnings
      include: ["src/**/*.js", "src/**/*.jsx"], // Files to lint
      exclude: ["node_modules/**"], // Files to ignore
    }),
  ],
});
