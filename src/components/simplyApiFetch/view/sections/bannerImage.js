import React from 'react'

export default function BannerImage(props) {
  return (
    <div className='simpleApiFetch__bannerImage'>
      <img className='w-100' alt="banner" src={props.imgUrl}/>
    </div>
  )
}
