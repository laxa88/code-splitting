const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",

  entry: {
    a: "./src/index-004a.js",
    b: "./src/index-004b.js"
  },

  output: {
    filename: "[name].output.js",
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [new HtmlWebpackPlugin()]
};
