module.exports = function (config) {
  config.set({
    plugins: ["karma-webpack", "karma-jasmine"],
    basePath: "",
    frameworks: ["jasmine", "karma-typescript"],
    files: ["**/*.spec.ts"],
    preprocessors: {
      "**/*.spec.ts": ["karma-typescript"],
    },
  });
};
