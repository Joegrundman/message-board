import React, { Component } from 'react'
import shortid from 'shortid'
import Box from '../Box/Box'
import User from '../User/User'
import Post from '../Post/Post'
import BackButton from '../BackButton/BackButton'
import { apiComments } from '../../endpoints'

class Posts extends Component {
    constructor(props) {
        super(props)
        this.fetchComments = this.fetchComments.bind(this)
    }

    fetchComments(postId) {
        fetch(apiComments + `?postId=${postId}`)
            .then(res => res.json())
            .then(body => {
                console.log('successfully fetched comments', body)
                this.props.showComments(postId, body.comments)
            })
            .catch(err => console.log('error fetching comments', err))
    }

    render() {

        return (
            <div>
                <BackButton handleClick={this.props.goBack} />
                <Box primary={true}><User key={shortid.generate()} user={this.props.user} /></Box>
                {this.props.posts.map((post, i) => (
                    <Box key={shortid.generate()} secondary={true} isPost={true}>
                        <Post post={post} handleClick={() => this.fetchComments(post.id)}/>
                    </Box>
                ))}
            </div>
        )
    }
}

export default Posts