const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  //inform webpack that we're building a bundle
  //for nodejs, rather than for the browser
  target: 'node',
  //tell webpack the root file of router
  //server application
  entry: './src/index.js',
  //tell webpack where to put the output file
  //after build, and what the name of the output file should
  //be
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  //any thing in the node_modules will not be included inside
  //of our server side bundle
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);