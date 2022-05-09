import React from 'react'

export default function UserDescription(props) {
  return (
    <div className='simpleApiFetch__description'>
        <span>Employee <span className='text-info'>@{props.password }.org</span>  </span>
    </div>
  )
}
