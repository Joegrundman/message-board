const loc = process.env.NODE_ENV === 'development' ? '' : 'someherokuurl'

export const apiUsers = loc + '/users'
export const apiPosts = loc + '/posts'
export const apiComments = loc + '/comments'