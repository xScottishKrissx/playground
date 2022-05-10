import React from 'react'

import githubLogoDark from '../RMPComponentView/githubLogoDark.png'
import githubLogoLight  from '../RMPComponentView/githubLogoLight.png'

export default function GithubLink(props) {
  let iconStyle = props.iconColour === "light" ? githubLogoLight : githubLogoDark
  return (
    <div className='component_githubLinkContainer'>
        <div className='componentGithubLink'>
            <a href={props.githubUrl} target="__top">
                <img alt="View code on github.com" src={iconStyle} />
            </a>
        </div>
    </div>
  )
}
