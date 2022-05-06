import React from 'react'
import './simpleApiFetch.css'

import { useEffect, useState } from 'react'
import View from './view/view'



export default function SimpleApiFetch() {

const [apiData, setApiData] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
    console.log("Rendered")

  fetch("https://api.randomuser.me/?results=10")
    .then(res => {
        return res.json()
    })
    .then(data => {
        console.log(data)
        console.log(data.results[0].gender)
        setApiData(data)
        setLoading(false)
    } )

}, [])


const getRandomNumber = (x) =>{
    return Math.floor((Math.random() * x.length))
}

  return (
    <div className='simpleApiFetch__container'>
        {loading ? 
            <p>Loading</p> : <View data={apiData.results} randomUser={getRandomNumber}/>}
    </div>
  )
}
