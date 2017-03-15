const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')
const rootDir = require('app-root-dir')
const webpack = require('webpack')
const { isDev, isProd } = require('../../config')

const baseConfig = {
  entry: {
    // client: [
    //   path.resolve(rootDir.get(), 'src', 'client', 'index')
    // ],
    vendor: [
      'vue',
      'vuex',
      'vue-router',
      'vuex-router-sync',
      'vue-meta'
    ]
  },
  output: {
    // path: path.resolve(rootDir.get(), 'dist', 'client'),
    filename: isDev ? '[name].bundle.js' : '[name].[hash].bundle.js',
    publicPath: '/'
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
      },
      {
      test: /\.(png|jpg|gif|svg|woff2?|ttf|svg|eot)$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: '[name].[hash].[ext]'
      }
    }
    ]
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
    //     VUE_ENV: '"client"',
    //     CLIENT_BUILD: true,
    //     SSR_BUILD: false
    //   }
    // }),
    new webpack.optimize.CommonsChunkPlugin('vendor'),
    new HtmlPlugin({
      template: path.resolve(rootDir.get(), 'src', 'client', 'index.template.html'),
      filename: 'index.template.html'
    })
  ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },

}

// dev config
if (isDev) {
  // entry
  // baseConfig.entry.client.unshift('webpack-hot-middleware/client')

  // plugins
  baseConfig.plugins.unshift(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
  // Just use the name so HMR doesn't get confused.
  baseConfig.output.filename = '[name].bundle.js'
  // devtool
  baseConfig.devtool = 'inline-source-map'
} else {
  // add a hash for cash busting.
  baseConfig.output.chunkFilename = '[name]-[chunkhash].js'
  baseConfig.output.filename = '[name].[hash].bundle.js'
}

module.exports = baseConfig
