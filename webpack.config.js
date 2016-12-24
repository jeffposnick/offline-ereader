const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const BUILD_DIR = './build';
const PAGES = ['index', 'read'];
const SRC_DIR = './src';

let entries = {};
let htmlPlugins = [];
PAGES.forEach(page => {
  entries[page] = `./${page}.js`;
  htmlPlugins.push(new HtmlWebpackPlugin({
    template: `./${page}.html`,
    chunks: [page],
    filename: `${page}.html`
  }));
});

module.exports = {
  context: path.resolve(__dirname, SRC_DIR),

  entry: entries,

  output: {
    filename: '[name].js',
    path: BUILD_DIR
  },

  module: {
    rules: [{
      test: /manifest\.json$|\.png$|\.css$|\.svg$/,
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
    new CleanWebpackPlugin([BUILD_DIR]),
    ...htmlPlugins
  ]
};
