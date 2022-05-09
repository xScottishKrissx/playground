import React from 'react'

export default function UserStats( props ) {
  return (
    <div className='simpleApiFetch__userStats'>
        <span>{Math.floor((Math.random() * 123))} <span className='text-white-50'>Following</span></span>
        <span>{Math.floor((Math.random() * 12345))} <span className='text-white-50'>Followers</span></span>
    </div>
  )
}
