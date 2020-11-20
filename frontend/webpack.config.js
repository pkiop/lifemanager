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
      '@Component': path.resolve(__dirname, 'src/component'),
      '@Atom': path.resolve(__dirname, 'src/component/atoms'),
      '@Molecule': path.resolve(__dirname, 'src/component/molecules'),
      '@Organism': path.resolve(__dirname, 'src/component/organisms'),
      '@Image': path.resolve(__dirname, 'image'),
      '@Style': path.resolve(__dirname, 'style'),
      '@Util': path.resolve(__dirname, 'util'),
      '@Hook': path.resolve(__dirname, 'Hook'),
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
