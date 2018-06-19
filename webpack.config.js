const path = require('path');
const webpack = require('webpack');
// creates a html page with webpack outputs in place
const HtmlWebpackPlugin = require('html-webpack-plugin');
// cleans dist folder
const CleanWebpackPlugin = require('clean-webpack-plugin');

// get the current development
const devMode = process.env.NODE_ENV !== 'production';

// use dotenv to return an Object with a parsed key
const dotenv = require('dotenv');

const env = dotenv.config().parsed || {};

const envKeys = Object.keys(env).reduce((prev, next) => {
  // eslint-disable-next-line
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

const distPath = path.resolve(__dirname, 'client', 'dist');
module.exports = {
  entry: {
    app: path.join(__dirname, 'client', 'src', 'index.js'),
  },
  output: {
    filename: '[name].bundle.js',
    path: distPath,
  },
  devtool: devMode && 'eval-source-map',
  devServer: {
    contentBase: distPath,
    port: 1234,
    publicPath: 'http://localhost:1234/',
    hot: true,

  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          devMode && 'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([distPath]),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'client', 'src', 'public', 'index.html'),
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.DefinePlugin(envKeys),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

