const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
  name: 'ts-back-setting',
  mode: 'development', // "production" | "development" | "none"
  devtool: 'eval', // source-map hidden-source-map
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', 'json', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: 'tsconfig.json',
        baseUrl: './src',
      }),
    ],
  },
  entry: {
    index: ['./src/app.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: ['/node_modules'],
      },
    ],
  },
  optimization: {},
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
  },
  target: 'node',

};
