import React, { Component } from 'react'
import shortid from 'shortid'
import Box from '../Box/Box'
import Comment from '../Comment/Comment'
import User from '../User/User'
import Post from '../Post/Post'
import BackButton from '../BackButton/BackButton'

class Comments extends Component {
    render() {
        return (
            <div>
                <BackButton handleClick={this.props.goBack} />              
                <Box key={shortid.generate()} primary={true}><User user={this.props.user} /></Box>
                <Box key={shortid.generate()} secondary={true} isPost={true} ><Post post={this.props.post} /></Box>
                {this.props.comments.map((comment, i) => (
                    <Box key={shortid.generate()} primary={false} isComment={true} >
                        <Comment comment={comment} />
                    </Box>
                ))}
            </div>
        )
    }
}

export default Comments