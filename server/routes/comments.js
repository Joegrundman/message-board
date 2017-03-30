var express = require('express')
var router = express.Router()
var fs = require('fs')
var path = require('path')

var commentsPath = path.join(__dirname, '..', 'data', 'comments.json')

router.get('/', (req, res) => {
    var postId = parseInt(req.query.postId, 10)
    console.log('hit with comment get request for postId', postId)
    fs.readFile(commentsPath, 'utf8', (err, comments) => {
        if(err) {
            console.log('error fetching comments', err)
            res.status(500).json({msg: "error fetching comments from server"})
        }
        var postComments = JSON.parse(comments).filter(c => c.postId === postId)
        res.status(200).json({msg: "successfully retrieved comments", comments: postComments})
    })

})

module.exports = router