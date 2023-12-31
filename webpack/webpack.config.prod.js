/**
 * @Owner: Rishabh Anand
 * @Desc: Webpack - Production Config
 **/

/* Global Webpack Constants */
const { PRODUCTION } = require("./webpack.constants");

/* Webpack Configs */
const CommonWebpackConfig = require("./webpack.common");

module.exports = () => {
  const { entryPoint, outputBuild, resolve, commonModuleRules, commonPlugins } =
    CommonWebpackConfig;

  return {
    entry: entryPoint,
    output: outputBuild,
    mode: PRODUCTION,
    resolve,
    module: {
      rules: [...commonModuleRules],
    },
    plugins: [...commonPlugins],
  };
};
