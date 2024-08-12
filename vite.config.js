import { sveltekit } from "@sveltejs/kit/vite";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    sveltekit(),
    visualizer({
      emitFile: true,
      filename: "stats.html",
    }),
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});
