// webpack.config.js
const path = require('path');

module.exports = {
  entry: {
    "contacts/index": "./src/main/contacts/index.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public/javascripts"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
              presets: [
                  "@babel/preset-env",
                  "@babel/preset-react"
              ],
          },
        },
      },
    ],
  },
};
