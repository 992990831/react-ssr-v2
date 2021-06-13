const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
    index: './src/server/index.js',
  },

  target: 'node',

  externals: [nodeExternals()],

  output: {
    path: path.resolve('server'),
    filename: '[name].js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
      }
    ]
  }
};