const {
  override,
  setWebpackTarget,
  addWebpackPlugin,
} = require("customize-cra");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { resolve } = require("path");

module.exports = {
  webpack: override(
    setWebpackTarget("electron-renderer"),
    addWebpackPlugin(
      new CopyWebpackPlugin([
        {
          from: resolve(
            "node_modules",
            "mediainfo.js",
            "dist",
            "mediainfo.wasm"
          ),
          to: "static/js",
        },
      ])
    )
  ),
};
