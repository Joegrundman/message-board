import React from 'react'
import './Post.css'

const Post = ({post, handleClick}) => (
    <div onClick={handleClick}>
        <div className="Post-details">
            <span>id: {post.id}</span>
            <span>userId: {post.userId}</span>
        </div>
        <div className="Post-title">
            <span>{post.title}</span>
        </div>
        <div>
            <span>{post.body}</span>
        </div>
    </div>   
)

Post.defaultProps = {
    handleClick: () => console.log('post click')
}

export default Post