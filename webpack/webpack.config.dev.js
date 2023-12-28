/**
 * @Owner: Rishabh Anand
 * @Desc:  Webpack - Development(Dev) Config
 **/

const Path = require("path");

/* Webpack Configs */
const CommonWebpackConfig = require("./webpack.common");

/* Global Webpack Constants */
const { DEVELOPMENT } = require("./webpack.constants");

module.exports = () => {
  const {
    entry,
    output,
    resolve,
    commonModuleRules,
    commonPlugins,
    optimization,
  } = CommonWebpackConfig;

  return {
    entry,
    output,
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
