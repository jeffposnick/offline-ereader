const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const path = require('path');

const BUILD_DIR = './build';
const PAGES = ['index', 'read'];
const SRC_DIR = './src';

const isDevServer = process.argv.some(v => v.includes('webpack-dev-server'));

let entries = {};
let plugins = [];
PAGES.forEach(page => {
  entries[page] = `./${page}.js`;
  plugins.push(new HtmlWebpackPlugin({
    template: `./${page}.html`,
    chunks: [page],
    filename: `${page}.html`
  }));
});

let rules = [{
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
}, {
  test: /\.css$/,
  use: [{
    loader: 'postcss-loader'
  }]
}];

if (!isDevServer) {
  rules.push({
    test: /\.js$/,
    use: [{
      loader: 'babel-loader',
      options: {
        plugins: ['transform-async-to-generator'],
        presets: ['minify']
      }
    }]
  });

  plugins.unshift(new CleanWebpackPlugin([BUILD_DIR]));
  plugins.push(new SWPrecacheWebpackPlugin({
    filename: 'service-worker.js',
    stripPrefix: path.resolve(__dirname, BUILD_DIR),
    runtimeCaching: [{
      default: 'networkFirst'
    }],
  }));
}

module.exports = {
  context: path.resolve(__dirname, SRC_DIR),
  entry: entries,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, BUILD_DIR)
  },
  module: {rules},
  plugins
};
