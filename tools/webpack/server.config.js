const path = require('path')
const rootDir = require('app-root-dir')
const NodeExternals = require('webpack-node-externals')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')
const config = require('../../config')
const isDev = config.isDev

const serverConfig = {
  target: 'node',
  entry: {
    server: [
      path.resolve(rootDir.get(), 'src', 'server', 'index')
    ]
  },
  output: {
    libraryTarget: "commonjs2",
    path: path.resolve(rootDir.get(), 'dist'),
    filename: '[name].bundle.js',
    publicPath: '/'
  },
  externals: [NodeExternals()],
  node: {
    __filename: true,
    __dirname: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  devtool: 'inline-source-map'
}

if (isDev) {
  serverConfig.plugins.unshift(
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`[server] 🌎  listening at http://${config.HOST}:${config.PORT}`],
      }
    })
  )
}

module.exports = serverConfig
