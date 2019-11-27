/* eslint-disable import/no-extraneous-dependencies */
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/',
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv({
      path: './.env.development',
    }),
  ],
};
