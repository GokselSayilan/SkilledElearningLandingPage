import React from 'react'
import './button.css'

function Button(props) {



  return (
    <button className={`button ${props.color}`}>Get Started</button>
  )
}

export default Button