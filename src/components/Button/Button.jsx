import React from 'react'
import './styles.css'

export const Button = (props) => {
  return (
    <button className={`confirm-btn ${props.setStyles}`}>{props.children}</button>
  )
}