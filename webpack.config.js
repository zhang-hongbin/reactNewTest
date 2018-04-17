var webpack = require('webpack');
var path = require('path');

module.exports = {
  devtool: 'eval-source-map',
  entry: __dirname + "/src/js/index.js",
  output: {
    path: __dirname + "/src/js",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['react-html-attrs']  //添加组件的插件配置
        }
      },
      {
        test: /\.css$/,
        use:[
          {
            loader:'style-loader'
          },
          {
            loader:'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]--[hash:base64:5]',
          }
        ]
      }
    ]
  },
};