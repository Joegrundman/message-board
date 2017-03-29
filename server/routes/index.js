/**
 * Routes Index
 */

module.exports = function(server) {
    server.use('/users', require('./users'));
    server.use('/posts', require('./posts'));
    server.use('/comments', require('./comments'));
};