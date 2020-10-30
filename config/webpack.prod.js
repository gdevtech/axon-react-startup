const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const TerserPlugin = require('terser-webpack-plugin');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');

const CompressionPlugin = require('compression-webpack-plugin');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'cheap-source-map',

  output: {
    path: path.resolve(__dirname, '../public/'),
    filename: '[name].[chunkhash:4].js',
    publicPath: '/',
  },

  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            comparisons: false,
          },
          output: {
            comments: false,
            ascii_only: true,
          },
        },
        sourceMap: true,
      }),
    ],
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        default: false,
        vendor: {
          test: /[\\/]node_modules[\\/]((?!react|react-dom).*)[\\/]/,
          name: 'vendors',
          chunks: 'all',
          reuseExistingChunk: true,
        },
        react: {
          test: /[\\/]node_modules[\\/]((react|react-dom).*)[\\/]/,
          name: 'react',
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    new Dotenv({
      path: path.join(__dirname, '../.env.prod'),
      systemvars: true,
    }),
    new CleanWebpackPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: true,
      statsOptions: {
        source: false,
      },
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: false,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
      },
      inject: 'body',
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],

  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
            },
          },
        ],
      },
    ],
  },
});
