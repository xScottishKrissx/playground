import React from 'react'

import './simpleSearchBar.css'

import data from './data.json'
import Search from './components/search'
import PreviewData from './components/previewData'

export default function SimpleSearchBar() {
  const myData = data
  return (
    <div className='simpleSearchBar__container'>
        <h2>Simple Search Bar</h2>
        <Search myData={data} />
        <PreviewData myData={data} />      
    </div>
  )
}
