module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: ["src/**/*.ts"],
    preprocessors: {
      "./karma.setup.ts": ["karma-typescript"],
      "src/**/*.ts": ["karma-typescript"],
    },
    reporters: ["progress", "karma-typescript"],
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
