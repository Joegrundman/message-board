import React, { Component } from 'react'
import shortid from 'shortid'
import Box from '../Box/Box'
import User from '../User/User'
import { apiPosts } from '../../endpoints'

class Users extends Component {
    constructor(props){
        super(props)

        this.fetchPosts = this.fetchPosts.bind(this)
    }

    fetchPosts(userId) {
        fetch(apiPosts + `?userId=${userId}`)
            .then(res => res.json())
            .then(body => {
                console.log('successfully fetched posts', body)
                this.props.showPosts(userId, body.posts)
            })
            .catch(err => console.log('error fetching posts', err))
    }

    render() {

        return (
            <div>
                {this.props.users.map((user, i) => (
                    <Box key={shortid.generate()} primary={true}>
                        <User user={user} handleClick={() => this.fetchPosts(user.id) } />
                    </Box>
                ))}
            </div>
        )
    }
}

export default Users