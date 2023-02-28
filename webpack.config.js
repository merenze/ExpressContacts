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
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, "src"),
          path.resolve(__dirname, "node_modules/bootstrap/"),
        ],
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      APP_URL: JSON.stringify(process.env.APP_URL),
    }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
      APP_URL: "http://localhost:3000",
      DEBUG: false,
    }),
  ],
};
