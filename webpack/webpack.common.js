/*
 * Owner: Rishabh Anand
 * Desc: Webpack - Common Config
 */

const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// Entry Point
const entry = Path.join(__dirname, "..", "src", "index.tsx");

// Output Build
const output = {
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
  // Images
  // {
  //   test: /\.(jpe?g|png|gif|svg)$/i,
  //   type: "asset",
  // use: [
  //   {
  //     // Optimize Image
  //     loader: `img-optimize-loader`,
  //     options: {
  //       compress: {
  //         // This will transform your png/jpg into webp.
  //         webp: true,
  //         disableOnDevelopment: false,
  //       },
  //       name: "[name].[contenthash].[ext]",
  //       outputPath: "static/images",
  //     },
  //   },
  // ],
  // },
  {
    test: /\.(jpe?g|png|gif|svg)$/i,
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
    // Note: On passing optimzed Webp to futher optimizing, images are getting less clarity on using 'img-optimize-loader'
    test: /\.(webp)$/,
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
    // Custom Fonts
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
    // Audios
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
    // TSX / TS Files
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "ts-loader",
      options: {
        compilerOptions: {
          noEmit: false, // this option will solve the issue
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
  entry,
  output,
  resolve,
  commonModuleRules,
  commonPlugins,
};
