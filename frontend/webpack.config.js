const path = require('path');
const webpack = require('webpack');
const { HotModuleReplacementPlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv').config({
  path: path.join(__dirname, '.env'),
});

module.exports = {
  mode: process.env.NODE_ENV, // production
  devtool: process.env.NODE_ENV === 'development' ? 'eval' : 'hidden-source-map', // hidden-source-map => 그냥 source-map하면 개발자 도구에 코드 다 노출됨
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@Components': path.resolve(__dirname, 'src/components'),
      '@Atoms': path.resolve(__dirname, 'src/components/UI/atoms'),
      '@Molecules': path.resolve(__dirname, 'src/components/UI/molecules'),
      '@Organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@Templates': path.resolve(__dirname, 'src/components/templates'),
      '@Pages': path.resolve(__dirname, 'src/components/pages'),
      '@Images': path.resolve(__dirname, 'images'),
      '@Styles': path.resolve(__dirname, 'src/styles'),
      '@Utils': path.resolve(__dirname, 'src/utils'),
      '@Hooks': path.resolve(__dirname, 'Hooks'),
      '@Stores': path.resolve(__dirname, 'src/stores'),
    },
  },
  entry: {
    index: [path.resolve(__dirname, 'src', 'client.tsx')],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        test: /\.(png|jpg|svg)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: path.resolve(__dirname, 'src', 'index.html'),
      },
    ),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
    new HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },

  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
  },
};
