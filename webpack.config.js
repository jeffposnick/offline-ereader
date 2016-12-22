const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BUILD = './build';

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    index: './index.js'
  },

  output: {
    filename: '[name].js',
    path: BUILD
  },

  module: {
    rules: [{
      test: /\.json$|\.png/,
      use: [{
        loader: 'file-loader',
        options: {
          name: '[name].[ext]'
        }
      }]
    }, {
      test: /workers\/.+\.js$/,
      use: [{
        loader: 'worker-loader',
        options: {
          name: '[name].[ext]'
        }
      }]
    }, {
      test: /\.css$/,
      use: [
        {loader: 'style-loader'},
        {loader: 'css-loader'}
      ]
    }]
  },

  plugins: [
    new CleanWebpackPlugin([BUILD]),
    new HtmlWebpackPlugin({template: './index.html'})
  ]
};
