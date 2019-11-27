/* eslint-disable import/no-extraneous-dependencies */
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/hangman-js/',
    filename: 'bundle.js',
  },
  plugins: [
    new Dotenv({
      path: './.env.production',
    }),
  ],
};
