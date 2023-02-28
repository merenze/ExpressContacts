// webpack.config.js
const path = require('path');
const webpack = require('webpack');

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
  plugins: [
    new webpack.DefinePlugin({
      APP_URL: JSON.stringify(process.env.APP_URL),
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      APP_URL: "http://localhost:3000",
      DEBUG: false,
    }),
  ],
};