import React from 'react'
import './simpleApiFetch.css'
import { useEffect, useState } from 'react'
import View from './view/view'

export default function SimpleApiFetch() {

const [apiData, setApiData] = useState(null)
const [loading, setLoading] = useState(true)

useEffect(() => {
    // console.log("Rendered")

  fetch("https://api.randomuser.me/?results=20")
    .then(res => {
        return res.json()
    })
    .then(data => {
        setApiData(data)
        setLoading(false)
    } )
    .catch(error => console.log(error))

}, [])


const getRandomNumber = (x) =>{
    return Math.floor((Math.random() * x.length))
    
}

  return (
    <div className='simpleApiFetch__container position-relative bg-dark w-100'>
        {loading ? 
            <p>Loading simple api fetch...</p> : <View data={apiData.results} randomUser={getRandomNumber}/>
        }
    </div>
  )
}
