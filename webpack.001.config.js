const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",

  entry: "./src/index-001.js",

  output: {
    filename: "output.js",
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [new HtmlWebpackPlugin()]
};
