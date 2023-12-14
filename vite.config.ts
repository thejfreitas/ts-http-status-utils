import { resolve } from "path";
import { defineConfig } from "vite";
import { defineConfig as vitestConfig } from "vitest/config";
import dts from "vite-plugin-dts";

const testConfig = vitestConfig({
  test: {
    include: ["./tests/*.ts"],
    globals: true,
  },
});

const config = defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ts-http-status-utils",
      fileName: "ts-http-status-utils",
    },
  },
  plugins: [dts()],
});

export default {
  ...testConfig,
  ...config,
};
