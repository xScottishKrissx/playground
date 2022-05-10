import React from 'react'

export default function GithubLink(props) {
  return (
    <div className='component_githubLinkContainer'>
        <div className='componentGithubLink'>
            <a href={props.githubUrl} target="__top">
                <img alt="View code on github.com" src={props.githubIconStyle} />
            </a>
        </div>
    </div>
  )
}
