import React, { Component } from 'react'
import './Box.css'

class Box extends Component {

    render() {

        const boxClass = "Box-container " + 
        (this.props.primary ?  " primary" : this.props.secondary ? " secondary" : "") + 
        (this.props.isPost ? " Box-post": this.props.isComment? " Box-comment" : "")

        return (
            <div className={boxClass}>
                {this.props.children}
            </div>
        )
    }
}

export default Box