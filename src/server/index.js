import api from './api'
import config from '../../config'
import express from 'express'
import rootDir from 'app-root-dir'
import path from 'path'
import pageHandler from './pageHandler'

// dev dependencies
import webpack from 'webpack'
import devMiddleware from 'webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'
import clientConfig from '../../tools/webpack/client.config'

const app = express()

// dev middleware
if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(clientConfig)
  app.use(devMiddleware(compiler, {
    publicPath: clientConfig.output.publicPath,
    noInfo: true,
    quiet: true,
    stats: 'none'
  }))
  app.use(hotMiddleware(compiler))
}


// middleware
app.use(express.static(path.resolve(rootDir.get(), 'client')))

// the api routes
app.use('/api', api)

// handle pages :)
app.get('*', pageHandler)

// hello world!
app.listen(config.PORT, config.HOST, err => {
  if (err) throw err
  // To change console log, edit tools/webpack/server.config.js FriendlyErrorsWebpackPlugin()
})
