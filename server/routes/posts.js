var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var postsPath = path.join(__dirname, '..', 'data', 'posts.json');

router.get('?:userId', (req, res) => {
    console.log('server hit with posts get request');
    var userId = req.params.userId;
    fs.readFile(postsPath, 'utf8', (err, posts) => {
        if(err) {
            console.log('server failed to get posts', err);
            res.status(500).json({msg: 'failed to get posts from server'});
        };
        var userPosts = posts.filter(p => p.id === userId );
        res.status(200).json({msg: "successfully send posts", posts: userPosts});
    });
});

module.exports = router;