module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: ["karma.setup.js", "src/**/*.ts"],
    preprocessors: {
      "karma.setup.js": ["karma-typescript"],
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
    karmaTypescriptConfig: {
      compilerOptions: {
        allowJs: true,
        esModuleInterop: true,
      },
      bundlerOptions: {
        addNodeGlobals: false,
      },
    },
  });
};
