import React from 'react'
import './User.css'

const User = ({user, handleClick}) => (
        <div onClick={handleClick}>
            <div className="User-details">
                <span>id: {user.id}</span>
                <span>name: {user.name}</span>
                <span>email: {user.email}</span>
            </div>
            <div className="User-username">
                <span>{user.username}</span>
            </div>
        </div>
)

User.defaultProps = {
    handleClick: () => console.log('User click')
}

export default User