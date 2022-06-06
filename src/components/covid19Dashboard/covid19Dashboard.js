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




    useEffect(()=>{

    const dataByCountry = "https://disease.sh/v3/covid-19/countries/" 
    const dataByGlobeTotal = "https://disease.sh/v3/covid-19/all"
    const dataCovidTimeline = "https://disease.sh/v3/covid-19/historical"
    
    const dataByGlobalVaccine = "https://disease.sh/v3/covid-19/vaccine/coverage"
    const dataByCountryVaccine = "https://disease.sh/v3/covid-19/vaccine/coverage/countries"

    // const test = "https://disease.sh/v3/covid-19/vaccine/coverage/countries"

    Promise.all([
        fetch(dataByCountry) ,
        fetch(dataByGlobeTotal),
        fetch(dataByGlobalVaccine),
        fetch(dataCovidTimeline),
        fetch(dataByCountryVaccine)
    ])
    .then(responses => 
        
        Promise.all(responses.map(response => 
            response.json()
        ))
        
    )
    .then(data => {
        setData({
            countryData:data[0], 
            globalData: data[1], 
            vaccineData:data[2], 
            covidTimeline:data[3], 
            countryVaccine: data[4]
        })
        // console.log(data[4])
        setLoading(false)  
    })
    .catch(error => console.log(error), setLoading(true))

    },[])

    // console.log(data.globalData)

    // const setInputState = (x) =>{ setInput(x) }
    // Destructuring
    const {countryData, globalData, vaccineData, covidTimeline, countryVaccine} = data
    return (
        <Covid19DashboardView 
            // View.js
            countryData={countryData} 
            globalData={globalData}
            vaccineData={vaccineData}
            countryVaccine={countryVaccine}
            covidTimeline={covidTimeline}
            loading={loading} 

        />)
  
}
