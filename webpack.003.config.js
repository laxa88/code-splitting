const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",

  entry: {
    a: "./src/index-003a.js",
    b: "./src/index-003b.js"
  },

  output: {
    filename: "[name].output.js",
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [new HtmlWebpackPlugin()]
};
