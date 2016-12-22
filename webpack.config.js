const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BUILD = './build';

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    index: './index.js',
    read: './read.js'
  },

  output: {
    filename: '[name].js',
    path: BUILD
  },

  module: {
    rules: [{
      test: /manifest\.json$|\.png|\.css/,
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
    }]
  },

  plugins: [
    new CleanWebpackPlugin([BUILD]),
  ].concat(['index', 'read'].map(page => {
    return new HtmlWebpackPlugin({
      template: `./${page}.html`,
      chunks: [page],
      filename: `${page}.html`
    })
  }))
};
