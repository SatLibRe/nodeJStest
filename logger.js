const EventEmitter = require('events')

const url = 'http://fakeendpoint.com'

// console.log(__filename)
// console.log(__dirname)
class Logger extends EventEmitter {

    log(message) {
        ///mock htpp request 
        console.log(message)
        // raise an event 
        this.emit('messageLogged', {id: 1, url: 'http://'})
    }

}



module.exports = Logger;
