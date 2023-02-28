// webpack.config.js
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    "scripts/contacts/index": "./src/main/contacts/index.js",
    'scripts/navbar': './src/main/navbar.js',
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      // Babel
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      // CSS
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/bootstrap/"),
        ],
        use: ["style-loader", "css-loader"],
        sideEffects: true,
      },
      // SCSS
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, "styles")],
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              failOnError: true,
              sourceMap: true,
            },
          },
        ],
        sideEffects: true,
      },
    ],
  },
  plugins: [
    // Transpile SCSS to CSS
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    // Environent variable replacement in client scripts
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
      APP_URL: "http://localhost:3000",
      DEBUG: false,
    }),
  ],
};
