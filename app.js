const Logger = require('./logger.js')
const path = require('path')
const os = require('os')
const fs = require('fs')

const logger = new Logger()


logger.on('messageLogged', event => {
    console.log('Listener Called', event)
})


logger.log("miles")
