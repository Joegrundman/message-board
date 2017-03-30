var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var cors = require('cors')

var server = express()
var PORT = process.env.PORT || 3001
// var init = require('./init')

// init()

server.use(cors())
server.use(bodyParser.json())

server.get('/', (req, res) => {
    res.send(`<p>This is a node server to serve a react message board app</p>`)
})

/**
 * Routes
 */
var router = require('./routes')(server)

if (server.get('env') === 'production') {  
    server.use(express.static(path.join(__dirname, '/build')))

    // production error handler
    // no stacktraces leaked to user
    server.use(function(err, req, res, next) {
        res.status(err.status || 500)
        res.render('error', {
        message: err.message,
        error: {}
        });
  });
} else {
    // Error Handling
    server.use(function(err, req, res, next) {
        res.status(err.status || 500)
    });
}

server.listen(PORT, () => {
    console.log('Find the server at: http://127.0.0.1:' + PORT)
})


module.exports = server

