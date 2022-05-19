import React from 'react'
import { useEffect, useState } from 'react'
import './covid19Dashboard.css'

import Covid19DashboardView from './view/covid19DashboardView'


export default function Covid19Dashboard() {
    // console.log("Render")
    const [data,setData] = useState({
        countryData:"",
        globalData:"",
        vaccineData:""
    })
    const [loading, setLoading] = useState(true)
    const [input,setInput] = useState()
    // User Input
    const userCountry = input
    // Starting Country
    const startingCountry = ""
    const getCountry =  userCountry || startingCountry

    useEffect(()=>{

    const dataByCountry = "https://disease.sh/v3/covid-19/countries/" + getCountry
    const dataByGlobeTotal = "https://disease.sh/v3/covid-19/all"
    const dataByGlobalVaccine = "https://disease.sh/v3/covid-19/vaccine/coverage"
    const dataByAllCovid = "https://disease.sh/v3/covid-19/all"

    Promise.all([
        fetch(dataByCountry) ,
        fetch(dataByGlobeTotal),
        fetch(dataByGlobalVaccine),
        fetch(dataByAllCovid)
    ])
    .then(responses => 
        Promise.all(responses.map(response => response.json()))
    )
    .then(data => {
        setData({countryData:data[0], globalData: data[1], vaccineData:data[2]})
        // console.log(data[0])
        setLoading(false)  
    })
    .catch(error => console.log(error), setLoading(true))

    },[input, getCountry])

    // console.log(data.globalData)

    const setInputState = (x) =>{ setInput(x) }
    // Destructuring
    const {countryData, globalData, vaccineData} = data
    return (
        <Covid19DashboardView 
            // View.js
            countryData={countryData} 
            globalData={globalData}
            vaccineData={vaccineData}
            loading={loading} 
            // Search.js
            setInput={setInputState} 
            // dataOk={dataOk}
        />)
  
}
