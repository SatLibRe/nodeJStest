const Logger = require('./logger.js')
const path = require('path')
const os = require('os')
const fs = require('fs')
const http = require('http')

const logger = new Logger()

logger.on('messageLogged', event => {
    console.log('Listener Called', event)
})

const server = http.createServer((request, response) => {
    if(request.url === '/')   {
        response.write('Hello Miles')
        response.end()
    } 

    if(request.url == '/api/courses') {
        response.write(JSON.stringify([1,2,3]))
        response.end()
    }
})


server.listen(3000)

console.log('Listening on port 3000')

