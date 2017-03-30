import React, { Component } from 'react'
import { apiUsers } from '../../endpoints'
import { PAGE } from '../../constants'
import Users from '../Users/Users'
import Posts from '../Posts/Posts'
import Comments from '../Comments/Comments'
import './Main.css'

class Main extends Component {

    constructor() {
        super()

        this.state = {
            page: PAGE.USERS,
            users: [],
            selectedUser: {},
            posts: [],
            selectedPost: {},
            comments: []
        }

        this.goBack = this.goBack.bind(this)
        this.showPosts = this.showPosts.bind(this)
        this.showComments = this.showComments.bind(this)
    }

    componentDidMount() {
        fetch(apiUsers)
        .then(res => res.json())
        .then(body => {
            this.setState({
                users: JSON.parse(body.users)
            })
        })
        .catch(er => {
            console.log('error fetching from server', er)
        })
    }

    goBack() {
        const nextPage = this.state.page === PAGE.COMMENTS ? PAGE.POSTS : PAGE.USERS
        setTimeout(() => {
            this.setState({
                page: nextPage
            })
        }, 200)

    }

    showComments(postId, comments) {
        console.log('adding comments', comments.length)
        this.setState({
            selectedPost: this.state.posts.find(p => p.id === postId),
            page: PAGE.COMMENTS,
            comments

        })
    }

    showPosts(userId, posts) {
        console.log('addingPosts', posts.length)
        this.setState({
            selectedUser: this.state.users.find(u => u.id === userId),
            page: PAGE.POSTS,
            posts
        })
    }

    render() {

        return (
            <div>
               {this.state.page === PAGE.USERS ? 
                    <Users users={this.state.users} showPosts={this.showPosts}/> :
                ''}
                {this.state.page === PAGE.POSTS ? 
                    <Posts user={this.state.selectedUser} posts={this.state.posts} showComments={this.showComments} goBack={this.goBack} /> :
                ''}
                {this.state.page === PAGE.COMMENTS ? 
                    <Comments user={this.state.selectedUser} post={this.state.selectedPost} comments={this.state.comments} goBack={this.goBack} /> :
                ''}
            </div>
        )
    }
}

export default Main