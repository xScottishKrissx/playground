import React from 'react'

import githubLogoDark from './githubLogoDark.png'
import githubLogoLight  from './githubLogoLight.png'

export default function GithubLink(props) {
  let iconStyle = props.iconColour === "light" ? githubLogoLight : githubLogoDark
  return (
    <div className='componentItemButtonIconContainer top-0 left-0'>
        <div className='componentItemButtonIcon p-1'>
            <a href={props.githubUrl} target="__top">
                <img alt="View code on github.com" src={iconStyle} />
            </a>
        </div>
    </div>
  )
}