import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true, // enables global API for Vitest
    environment: "node",
    include: ["test/**/*.test.ts"],
  }
});
