var server = require('pushstate-server');

server.start({
  port: process.env.PORT || 8090,
  directory: './'
});

// Then we run webpack dev server
var WebpackDevServer = require("webpack-dev-server");
var webpack = require("webpack");

var compiler = webpack(process.argv[2] == 'hot' ? require('./webpack.config.hot.js') : require('./webpack.config.js'));
var devServer = new WebpackDevServer(compiler, {

    stats: {colors: true},
    contentBase: 'http://localhost:8090/',
    publicPath: 'http://localhost:8080/js/',

    hot: process.argv[2] == 'hot'
});

devServer.listen(8080, "localhost", function() {});
