var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: { path: __dirname + '/dist', filename: 'bundle.js' },
  resolve: {
    modulesDirectories: ['node_modules', './'], //use shared library so we can do server side and client side rendering
    extensions:         ['', '.js', '.jsx', '.css']
  },
 module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  devtool:'eval-source-map'
};
