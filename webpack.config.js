const path = require("path")
const slsw = require("serverless-webpack")

module.exports = {
  mode: slsw.lib.webpack.isLocal ? "development" : "production",
  entry: slsw.lib.entries,
  stats: "summary",
  resolve: {
    extensions: [".mjs", ".json", ".ts", ".js"],
  },
  target: "node",
  module: {
    rules: [
      {
        test: /\.(ts?)$/,
        loader: "ts-loader",
        exclude: [
          [
            path.resolve(__dirname, "node_modules"),
            path.resolve(__dirname, ".serverless"),
            path.resolve(__dirname, ".webpack"),
            path.resolve(__dirname, "src/__tests__"),
            path.resolve(__dirname, "src/__mocks__"),
            path.resolve(__dirname, "swagger"),
          ],
        ],
      },
    ],
  },
}
