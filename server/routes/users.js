var express = require('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')
var usersPath = path.join(__dirname, '..', 'data', 'users.json')

router.get('/', (req, res) => {
    console.log('hit with users get request')

    fs.readFile(usersPath, 'utf8', (err, users) => {
        if(err) {
            console.log('error fetching users', err)
            res.status(500).json({msg: 'server error fetching users'})
        }
    res.status(200).json({msg: 'successful users request', users: users})
    })

})

module.exports = router