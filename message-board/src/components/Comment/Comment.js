import React from 'react'
import './Comment.css'

const Comment = ({comment}) => (
    <div>
        <div className="Comment-details">
            <span>id: {comment.id}</span>
            <span>postId: {comment.postId}</span>
        </div>
        <span>comment: {comment.body}</span>
    </div>
)

export default Comment