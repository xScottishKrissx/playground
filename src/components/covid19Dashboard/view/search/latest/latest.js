import React, { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import './latest.css'
import loadingGif from '../../../assets/loading.gif'
export default function Latest(props) {    

    // const [loading, setLoading] = useState()

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const {data,country, countryVaccine} = props
    const filterCountry = data.filter(x => x.country === country)
    const getCountry = filterCountry[0]
    // console.log(filterCountry[0])

    // Don't return anything while user is typing
    if(!getCountry)return (
        <h1>searching for a match...  <img src={loadingGif} /></h1>
    )
    
    const {
        todayCases, 
        cases,
        casesPerOneMillion, 
        todayDeaths, 
        deaths, 
        deathsPerOneMillion, 
        todayRecovered,
        recovered,
        recoveredPerOneMillion,
        tests,
        testsPerOneMillion,
        critical,
        criticalPerOneMillion,
        active,
        activePerOneMillion,
        updated,
        population,
        countryInfo,
        continent
    } = getCountry

    const {flag} = countryInfo
    
    const getVaccineData = countryVaccine[0].timeline
    let getVaccineTimeline = Object.entries(getVaccineData).map(([date,number]) => ({date, number}))
    const totalVaccines = getVaccineTimeline.reverse()[0].number
    
    
    return (
        <div className='covid19Dashboard__latestContainer'>
            
        
            <div className='locationInfo'>
                <span className='fs-5 ms-3 me-2 text-muted' >{continent} &gt;</span>
                {/* &gt;        */}
                <span className='fs-3' > 
                    <img src={flag} /> 
                    {country} 
                </span>
                
            </div>

            <Row className='text-center'>
                <Col lg={6}>
                    <div>TodaysCase : {numberWithCommas(todayCases)}</div>
                    <div>Total Cases: {numberWithCommas(cases)}</div>
                    <div>Cases Per Million: {numberWithCommas(casesPerOneMillion)}</div>
                    -
                    <div>Todays Deaths: {numberWithCommas(todayDeaths)}</div>
                    <div>Total Deaths: {numberWithCommas(deaths)}</div>
                    <div>Deaths Per Million: {numberWithCommas(deathsPerOneMillion)}</div>
                    -
                    <div>Recovered Today: {numberWithCommas(todayRecovered)}</div>
                    <div>Total Recovered: {numberWithCommas(recovered)}</div>
                    <div>Recovered Per Million : {numberWithCommas(recoveredPerOneMillion)}</div>
                </Col>
                
                <Col lg={6}>
                    <div>Total Tests: {numberWithCommas(tests)}</div>
                    <div>Tests Per Million: {numberWithCommas(testsPerOneMillion)}</div>
                    -
                    <div>Critical: {numberWithCommas(critical)}</div>
                    <div>Critical Per Million: {numberWithCommas(criticalPerOneMillion)}</div>
                    -
                    <div>Active: {numberWithCommas(active)}</div>
                    <div>Active Per Million: {numberWithCommas(activePerOneMillion)}</div>
                    -
                    <div>Total Vaccines: {numberWithCommas(totalVaccines)}</div>
                    <div>Population: {numberWithCommas(population)}</div>
                </Col>
            </Row>
            
        </div>
    )
}
