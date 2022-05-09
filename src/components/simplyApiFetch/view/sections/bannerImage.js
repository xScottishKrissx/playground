import React from 'react'

export default function BannerImage(props) {
  return (
    <div className='simpleApiFetch__bannerImage'><img alt="banner" src={props.imgUrl}/></div>
  )
}
