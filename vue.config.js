const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    output: {
      filename: "dlv-button.umd.test.js",
      path: path.resolve(__dirname, "dist"),
      library: "DLVButton",
      libraryTarget: "umd",
      umdNamedDefine: true,
    },
  },
});
