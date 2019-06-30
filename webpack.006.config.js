const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",

  entry: "./src/index-006.js",

  output: {
    filename: "[name].output.js",
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [new HtmlWebpackPlugin()]
};
