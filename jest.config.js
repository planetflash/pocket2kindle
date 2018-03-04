module.exports = {
  modulePaths: ["src"],
  setupFiles: ["<rootDir>/src/utils/setupJest.js"],
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest"
  }
};
