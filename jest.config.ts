import type { Config } from "jest";
import { compilerOptions } from "./tsconfig.json";

const config: Config = {
  preset: "ts-jest",
  roots: ["<rootDir>"],
  modulePaths: [compilerOptions.baseUrl],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["jest-extended/all"],
};
export default config;
