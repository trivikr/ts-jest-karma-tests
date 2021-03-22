module.exports = function (config) {
  config.set({
    // plugins: ["karma-typescript", "karma-jasmine", "karma-chrome-launcher"],
    frameworks: ["jasmine", "karma-typescript"],
    files: [{ pattern: "src/**/*.ts" }],
    preprocessors: {
      "./karma.setup.js": ["karma-typescript"],
      "src/**/*.ts": ["karma-typescript"],
    },
    // reporters: ["progress", "karma-typescript"],
    browsers: ["ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
    singleRun: true,
  });
};
