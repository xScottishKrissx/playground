import React from 'react'
import loadingGif from '../assets/loading.gif'


export default function Loading(props) {
  return (
    <div className='searchResultsLoading'>
        <p>{props.content}</p>
        <img alt="results are loading" src={loadingGif} />
    </div>
  )
}
