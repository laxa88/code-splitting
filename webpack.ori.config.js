const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",

  // devtool: "source-map",

  entry: "./src",

  output: {
    filename: "output.js",
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    // usedExports: true,

    // splitChunks: {
    //   chunks: 'all'
    // }

    // runtimeChunk: 'single',

    // splitChunks: {
    //   chunks: 'all',
    //   maxInitialRequests: Infinity,
    //   minSize: 0,
    //   cacheGroups: {
    //     vendor: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name(module) {
    //         // get the name. E.g. node_modules/packageName/not/this/part.js
    //         // or node_modules/packageName
    //         const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];

    //         // npm package names are URL-safe, but some servers don't like @ symbols
    //         return `npm.${packageName.replace('@', '')}`;
    //       },
    //     },
    //   },
    // },
  },

  plugins: [new HtmlWebpackPlugin()]
};
