const nodemon = require('nodemon')
const path = require('path')
const once = require('ramda').once
const rootDir = require('app-root-dir')
const serverConfig = require('../webpack/server.config')
const webpack = require('webpack')
const serverCompiler = webpack(serverConfig)

const ssrConfig = require('../webpack/ssr.config')
const ssrCompiler = webpack(serverConfig)

function startServer() {
  const serverFileName = serverCompiler.options.output.filename.replace(
    '[name]',
    Object.keys(serverCompiler.options.entry)[0]
  )
  const serverFile = path.resolve(serverCompiler.options.output.path, serverFileName)
  nodemon({
    script: serverFile,
    watch: serverCompiler.options.output.path,
    nodeArgs: process.argv.slice(2)
  }).on('quit', process.exit)
}

const startServerOnce = once((err, stats) => {
  if (err) return
  startServer()
})

serverCompiler.watch({}, startServerOnce)
ssrCompiler.watch({}, startServerOnce)