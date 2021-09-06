const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ENV = process.env.NODE_ENV;
const IS_DEV = ENV === 'development';

module.exports = {
  mode: ENV,
  ...(IS_DEV && { devtool: 'inline-source-map' }),
  devServer: {
    open: true,
    hot: true,
    compress: true,
  },
  entry: {
    app: path.resolve(__dirname, 'src/app.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
  ],
};
