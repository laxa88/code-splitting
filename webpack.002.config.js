const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",

  entry: "./src/index-002.js",

  output: {
    filename: "output.js",
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist')
  },

  plugins: [new HtmlWebpackPlugin()]
};
