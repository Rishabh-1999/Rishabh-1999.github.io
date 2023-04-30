/*
 * Rishabh Anand
 * Dev Webpack Config
 */

const Path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");

/* */
const webpackPwaManifest = require("./webpackManifest");

/* Global Webpack Constants */
const { DEVELOPMENT } = require("./constants");

module.exports = () => {
  return {
    entry: Path.join(__dirname, "..", "src", "index.tsx"),
    output: {
      path: Path.join(__dirname, "..", "build"),
      filename: "index.bundle.js",
    },
    mode: DEVELOPMENT,
    resolve: {
      extensions: [".tsx", ".ts", ".jsx", ".js"],
      modules: [".", "node_modules"],
      alias: {
        react: Path.resolve(__dirname, "..", "node_modules/react"),
      },
    },
    devServer: { static: Path.join(__dirname, "..", "src") },
    module: {
      rules: [
        {
          test: /\.(gif|png|svg|jpe?g)$/,
          use: [
            {
              // Optimize Image
              loader: `img-optimize-loader`,
              options: {
                compress: {
                  // This will transform your png/jpg into webp.
                  webp: true,
                  disableOnDevelopment: true,
                },
                name: "[contenthash].[ext]",
                outputPath: "static/images",
              },
            },
          ],
        },
        {
          // Need to use, webp to optmized webp creating issue while using 'img-optimize-loader'
          test: /\.(webp)$/,
          use: [
            {
              loader: `file-loader`,
              options: {
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
                outputPath: "static/fonts",
              },
            },
          ],
        },
        {
          // JS / JSX Files ( Need to remove on long run )
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          // TS / TSX Files
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
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: Path.join(__dirname, "..", "public", "index.html"),
        filename: "index.html",
        inject: true,
        favicon: Path.join(__dirname, "..", "public", "logo", "favicon.ico"),
        manifest: Path.join(__dirname, "..", "public", "manifest.json"),
      }),

      webpackPwaManifest,
    ],
  };
};
