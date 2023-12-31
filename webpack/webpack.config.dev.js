/**
 * @Owner: Rishabh Anand
 * @Desc: Webpack - Development Config
 **/

const Path = require("path");

/* Global Webpack Constants */
const { DEVELOPMENT } = require("./webpack.constants");

/* Webpack Configs */
const CommonWebpackConfig = require("./webpack.common");

module.exports = () => {
  const {
    entryPoint,
    outputBuild,
    resolve,
    commonModuleRules,
    commonPlugins,
    optimization,
  } = CommonWebpackConfig;

  return {
    entry: entryPoint,
    output: outputBuild,
    mode: DEVELOPMENT,
    resolve,
    optimization,
    devServer: {
      static: Path.join(__dirname, "..", "public"),
    },
    module: {
      rules: [...commonModuleRules],
    },
    plugins: [...commonPlugins],
  };
};
