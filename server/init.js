var fs = require('fs')
var path = require('path')
var pathToUsers = path.join(__dirname, 'data', 'users.json')
// var pathToPosts = path(__dirname, 'data', 'posts.json')
// var pathToComments = path(__dirname, 'data', 'comments.json')

const init = () => {

    fs.readFile(pathToUsers, 'utf8', (err, data) => {
        console.log('data', data.length)
        var users = JSON.parse(data).map(d => {
            var user = {
                id: d.id,
                name: d.name,
                username: d.username,
                email: d.email
            }
            return user
        })
        // fs.writeFile(pathToUsers, JSON.stringify(users), 'utf8', err => console.log('error writing users', err))
    })

}

module.exports = init