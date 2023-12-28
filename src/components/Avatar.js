import React from 'react'

const Avatar = ({ size, className, url }) => {
  return (
    <img className={`rounded-pill ${className}`} style={{ width: size, height: size }} src={url} />
  )
}

export default Avatar