import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "node",
  preset: "ts-jest",
  coverageReporters: ["text-summary"],
  collectCoverageFrom: ["src/*.ts"],
  modulePathIgnorePatterns: ["<rootDir>/build/"],
  coverageDirectory: "tests",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};

export default config;
