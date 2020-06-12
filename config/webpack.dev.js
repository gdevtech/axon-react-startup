const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },

  devServer: {
    port: 8080,
    overlay: true,
    compress: true,
    open: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    clientLogLevel: 'silent',
    noInfo: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new ErrorOverlayPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '../.env.dev'),
      systemvars: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      file: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
      inject: 'body',
    }),
  ],
});
