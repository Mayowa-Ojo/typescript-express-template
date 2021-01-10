module.exports = {
   preset: "ts-jest",
   coveragePathIgnorePatterns: ["/node_modules/"],
   testMatch: ["**/__tests__/*.+(ts|tsx|js)"],
   moduleNameMapper: {
      "~routes/(.*)": "<rootDir>/src/routes/$1"
   },
   testEnvironment: "node",
};