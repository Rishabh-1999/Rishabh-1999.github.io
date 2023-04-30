/*
 * Rishabh Anand
 * Wepack Manifest
 */

const Path = require("path");

const WebpackPwaManifest = require("webpack-pwa-manifest");

module.exports = new WebpackPwaManifest({
  short_name: "RI",
  name: "Rishabh Anand | Portfolio",
  start_url: ".",
  display: "standalone",
  theme_color: "#000000",
  background_color: "#ffffff",
  crossorigin: "use-credentials", //can be null, use-credentials or anonymous
  icons: [
    {
      src: Path.resolve("public/logo/favicon.ico"),
      sizes: [64, 32, 24, 16], // multiple sizes
      purpose: "maskable",
      type: "image/x-icon",
    },
    {
      src: Path.resolve("public/logo/logo192.png"),
      size: "192x192",
      type: "image/png",
    },
    {
      src: Path.resolve("public/logo/logo512.png"),
      size: "512x512",
      type: "image/png",
    },
  ],
});
