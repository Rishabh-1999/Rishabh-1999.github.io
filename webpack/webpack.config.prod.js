/*
 * Owner: Rishabh Anand
 * Desc: Webpack - Production(Prod) Config
 */

const Path = require("path");

/* Webpack Configs */
const CommonWebpackConfig = require("./webpack.common");

/* Global Webpack Constants */
const { PRODUCTION } = require("./webpack.constants");

module.exports = () => {
  const { entry, output, resolve, commonModuleRules, commonPlugins } =
    CommonWebpackConfig;

  return {
    entry,
    output,
    mode: PRODUCTION,
    resolve,
    module: {
      rules: [...commonModuleRules],
    },
    plugins: [...commonPlugins],
  };
};
