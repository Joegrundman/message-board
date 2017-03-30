import React from 'react'
import './BackButton.css'

const BackButton = ({handleClick}) => (
    <button className="BackButton" type="button" onClick={handleClick}> &lt; Back </button> 
)

export default BackButton