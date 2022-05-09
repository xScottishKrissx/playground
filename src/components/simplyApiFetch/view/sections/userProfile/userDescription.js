import React from 'react'

export default function UserDescription(props) {
  return (
    <div className='simpleApiFetch__description bg-dark text-white'>
        <span>Employee <span className='text-info'>@{props.password }.org</span>  </span>
    </div>
  )
}
