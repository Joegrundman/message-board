var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var commentsPath = path.join(__dirname, '..', 'data', 'comments.json');

router.get('/?postId', (req, res) => {
    console.log('hit with comment git request');
    var postId = req.params.postId;
    fs.readFile(commentsPath, 'utf8', (err, comments) => {
        if(err) {
            console.log('error fetching comments', err);
            res.status(500).json({msg: "error fetching comments from server"});
        }
        var postComments = comments.filter(c => c.postId === postId);
        res.status(200).json({msg: "successfully retrieved comments", comments: postComments})
    })

});

module.exports = router;