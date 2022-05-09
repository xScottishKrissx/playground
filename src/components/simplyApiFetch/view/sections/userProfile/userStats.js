import React from 'react'

export default function UserStats( props ) {
  return (
    <div className='simpleApiFetch__userStats'>
        <span className='me-3'>{Math.floor((props.age * 3))} <span className='text-white-50'>Following</span></span>
        <span>{Math.floor((props.age * 321))} <span className='text-white-50'>Followers</span></span>
    </div>
  )
}
