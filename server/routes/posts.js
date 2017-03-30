var express = require('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')

var postsPath = path.join(__dirname, '..', 'data', 'posts.json')

router.get('/', (req, res) => {
    var userId = parseInt(req.query.userId, 10)
    console.log('server hit with posts get request for userId', userId)
    fs.readFile(postsPath, 'utf8', (err, posts) => {
        if(err) {
            console.log('server failed to get posts', err)
            res.status(500).json({msg: 'failed to get posts from server'})
        }
        var userPosts = JSON.parse(posts).filter(p => p.userId === userId )
        res.status(200).json({msg: "successfully send posts", posts: userPosts})
    })
})

module.exports = router