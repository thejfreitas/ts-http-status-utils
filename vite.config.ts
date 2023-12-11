import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ts-http-status-utils",
      fileName: "ts-http-status-utils",
    },
  },
  plugins: [dts()],
  test: {
    include: ["./tests/*.ts"],
    globals: true,
  },
});
