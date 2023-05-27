const Path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: Path.resolve(__dirname, "./src/index.js"),
  },
  output: {
    path: Path.join(__dirname, "./build"),
    filename: "bundle.js",
    publicPath: "/build/",
  },
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "./src"),
    },
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: Path.join(__dirname, "public"),
    },
    port: 8000,
  },
};
