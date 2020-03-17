var express = require('express')
const Logger = require('./loaders/logger')
const config = require('./config/index')

async function startServer() {
    const app = express()
    const loaders = require('./loaders/index')
    await loaders({ expressApp: app })
    // start the express server
    app.listen(config.port, err => {
        if (err) {
            Logger.error(err)
            process.exit(1)
        }
        Logger.info(`Server listening on port: ${config.port} `)
    })
}

startServer()
