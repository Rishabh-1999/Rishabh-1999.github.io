/*
 * @Owner: Rishabh Anand
 * @Desc: Webpack - Common Config
 */

const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Entry Point
const entryPoint = Path.join(__dirname, "..", "src", "index.tsx");

// Output Build
const outputBuild = {
  path: Path.join(__dirname, "..", "build"),
  filename: "index.bundle.js",
};

const resolve = {
  extensions: [".tsx", ".ts", ".jsx", ".js"],
  modules: [".", "node_modules"],
  alias: {
    react: Path.resolve(__dirname, "..", "node_modules/react"),
  },
};

// Common Module Rules
let commonModuleRules = [
  {
    // Image / SVG files
    test: /\.(jpe?g|png|gif|svg|webp)$/i,
    use: [
      {
        loader: `file-loader`,
        options: {
          name: "[name].[contenthash].[ext]",
          outputPath: "static/images",
        },
      },
    ],
  },
  {
    // Custom Fonts files
    test: /\.(eot|ttf|woff|woff2)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/fonts",
        },
      },
    ],
  },
  {
    // Audio files
    test: /\.(mp3)$/,
    use: [
      {
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "static/audio",
        },
      },
    ],
  },
  {
    // TASK: JSX / JS Files needed to be remove
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ["babel-loader"],
  },
  {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "ts-loader",
      options: {
        compilerOptions: {
          noEmit: false,
        },
      },
    },
  },
  {
    test: /\.(css)$/,
    use: ["style-loader", "css-loader"],
  },
  {
    test: /\.scss$/,
    use: [
      "style-loader",
      "css-loader",
      "resolve-url-loader",
      "postcss-loader",
      "sass-loader",
    ],
  },
];

const commonPlugins = [
  new HtmlWebpackPlugin({
    template: Path.join(__dirname, "..", "public", "index.html"),
    favicon: Path.join(__dirname, "..", "public", "logo", "favicon.ico"),
    manifest: Path.join(__dirname, "..", "public", "manifest.json"),
    filename: "index.html",
    inject: true,
  }),
];

module.exports = {
  entryPoint,
  outputBuild,
  resolve,
  commonModuleRules,
  commonPlugins,
};
