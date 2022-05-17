import React from 'react'
import { useEffect, useState } from 'react'
import './covid19Dashboard.css'

import Covid19DashboardView from './view/covid19DashboardView'


export default function Covid19Dashboard() {
    const [apiData, setInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    const [testMessage, setTestMessage] = useState(false)

    const [input,setInput] = useState()

    // User Input
    const userCountry = input
    // Starting Country
    const startingCountry = ""
    const getCountry =  userCountry || startingCountry

    useEffect(()=>{

        const handle404 = (response) =>{
                if(response.status === 404){
                    setTestMessage(true)
                }else{
                    setTestMessage(false)
                }
        }

        // Reference
        // const endpoint = "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        // const endpoint = "https://api.randomuser.me/?results=20"
        
        // Data Point By Country
        const endpoint = "https://disease.sh/v3/covid-19/countries/" + getCountry
        fetch(endpoint)
            
            .then(result => {
                // console.log(result.status)
                handle404(result)
                return result.json()
            })
            .then(data => {
                // console.log(data)
                setInfo(data)
                setLoading(false)
                
            })
            .catch(error => console.log(error))

    // Historical Global Data
        const endPoint2 = "https://disease.sh/v3/covid-19/historical/all?lastdays=30"
        fetch(endPoint2)
            .then(result => {
                return result.json()
            })
            .then(data => {
                console.log(data)
                const sum = [data.cases].reduce((partialSum,a) => partialSum + a,0)
                // console.log(sum)
            })

    },[input, getCountry])


    const setInputState = (x) =>{ setInput(x) }
    return (
        <Covid19DashboardView 
            // View.js
            data={apiData} 
            loading={loading} 
            // Search.js
            setInput={setInputState} 
            testMessage={testMessage}/>)
  
}
