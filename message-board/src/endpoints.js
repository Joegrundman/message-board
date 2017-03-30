const loc = process.env.NODE_ENV === 'development' ? '' : 'https://rs-messageboard-server.herokuapp.com/'

export const apiUsers = loc + '/users'
export const apiPosts = loc + '/posts'
export const apiComments = loc + '/comments'