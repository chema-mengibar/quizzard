module.exports = {
  roots: ["<rootDir>/pages", "<rootDir>/components"],
  testRegex: "\\.test\\.tsx?$",
  moduleNameMapper: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "scss"],
  transformIgnorePatterns: ["node_modules", "dist", ".vscode", ".git"],
  testPathIgnorePatterns: ["<rootDir>/.dist/", "<rootDir>/node_modules/"]
};
