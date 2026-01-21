import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testEnvironment: "node",

  // 👇 Add transform for TS/JS files
  transform: {
    "^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: "tsconfig.json" }],
    "^.+\\.(js|jsx|mjs)$": "babel-jest", // handles ESM if you import js modules
  },

  // 👇 Let Jest handle ES modules with .ts/.tsx
  extensionsToTreatAsEsm: [".ts", ".tsx"],

  // 👇 Handle your @/* alias
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },

  // 👇 Match your test files
  testMatch: [
    "**/__tests__/**/*.(spec|test).[jt]s?(x)",
    "**/?(*.)+(spec|test).[jt]s?(x)",
  ],

  modulePathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};

export default config;
