module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/dist/"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
    },
  },
  transform: {
    "^.+\\.(ts|js|html)$": "jest-preset-angular",
  },
  moduleFileExtensions: ["ts", "html", "js", "json"],
  coverageReporters: ["html"],
  collectCoverage: true,
  collectCoverageFrom: ["src/app/**/*.ts", "!src/main.ts", "!src/polyfills.ts"],
};
