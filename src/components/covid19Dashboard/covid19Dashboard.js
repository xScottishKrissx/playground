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
    // const [apiData, setInfo] = useState(null)
    // const [globalData, setGlobalData] = useState(null)
    // const [vaccineData, setVaccineData] = useState(null)

    const [loading, setLoading] = useState(true)

    // const [dataOk, setDataOk] = useState(false)

    const [input,setInput] = useState()

    // User Input
    const userCountry = input
    // Starting Country
    const startingCountry = ""
    const getCountry =  userCountry || startingCountry

    useEffect(()=>{

        // const handle404 = (response) =>{
        //         if(response.status === 404){
        //             setDataOk(true)
        //         }else{
        //             setDataOk(false)
        //         }
        // }




        // Reference
        // const endpoint = "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        
    //     // Data Point By Country
    //     const endpoint = "https://disease.sh/v3/covid-19/countries/" + getCountry
    //     fetch(endpoint)
            
    //         .then(result => {
    //             // console.log(result.status)
    //             handle404(result)
    //             return result.json()
    //         })
    //         .then(data => {
    //             // console.log(data)
    //             setInfo(data)
    //             setLoading(false)
                
    //         })
    //         .catch(error => console.log(error))

    // // Historical Global Data
    //     const endPoint2 = "https://disease.sh/v3/covid-19/historical/all?lastDays=30"
    //     fetch(endPoint2)
    //         .then(result => {
    //             handle404(result)
    //             return result.json()
    //         })
    //         .then(data => {
    //             // console.log(data)
    //             // const sum = [data.cases].reduce((partialSum,a) => partialSum + a,0)
    //             setGlobalData(data)
    //             setLoading(false)
    //             // console.log(sum)
    //         })

    //     const getVaccineInfo = "https://disease.sh/v3/covid-19/vaccine/coverage"
    //     fetch(getVaccineInfo)
    //         .then(result => {
    //             handle404(result)
    //             return(result.json())
    //         })
    //         .then(data => {
    //             setVaccineData(data)
    //             setLoading(false)
    //         })

    const dataByCountry = "https://disease.sh/v3/covid-19/countries/" + getCountry
    const dataByGlobeTotal = "https://disease.sh/v3/covid-19/historical/all?lastDays=30"
    const dataByGlobalVaccine = "https://disease.sh/v3/covid-19/vaccine/coverage"

        Promise.all([
            fetch(dataByCountry) ,
            fetch(dataByGlobeTotal),
            fetch(dataByGlobalVaccine)
        ])
        .then(responses => 
            Promise.all(responses.map(response => response.json()))
        )
        .then(data => {
            // Data Point By Country
            // setInfo(data[0])

            // Historical
            // setGlobalData(data[1])

            // Vaccines
            // setVaccineData(data[2])
            setData({countryData:data[0], globalData: data[1], vaccineData:data[2]})
            setLoading(false)
            
        })
        .catch(error => console.log(error), setLoading(true))


    },[input, getCountry])


    const setInputState = (x) =>{ setInput(x) }
    return (
        <Covid19DashboardView 
            // View.js
            data={data.countryData} 
            globalData={data.globalData}
            vaccineData={data.vaccineData}
            loading={loading} 
            // Search.js
            setInput={setInputState} 
            // dataOk={dataOk}
        />)
  
}
