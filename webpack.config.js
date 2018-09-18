const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: {
    bundle: [path.resolve(__dirname, 'src', 'index.tsx')]
  },
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader'
          },
          'ts-loader'
        ]
      }
    ]
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['.ts', '.tsx', '.js', '.css']
  },
  devServer: {
    port: 9191,
    headers: { 'Access-Control-Allow-Origin': '*' },
    https: true
  }
};
