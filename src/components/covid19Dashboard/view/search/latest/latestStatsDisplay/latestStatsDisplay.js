import React from 'react'

import { Container,Row, Col } from 'react-bootstrap'
import Loading from '../../../loading';

import './latestStatDisplay.css'


export default function LatestStatsDisplay(props) {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const {data, country, countryVaccine} = props

    const filterCountry = data.filter(x => x.country.toLowerCase() === country.toLowerCase())
    const getCountryObject = filterCountry[0]

    // Don't return anything while user is typing
    if(!getCountryObject) return  <Loading content="latest stats display..."/>;

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
        population,
        updated
    } = getCountryObject

    const getVaccineData = countryVaccine[0].timeline
    let getVaccineTimeline = Object.entries(getVaccineData).map(([date,number]) => ({date, number}))
    const totalVaccines = getVaccineTimeline.reverse()[0].number

    // console.log(delete getCountry.countryInfo)

    // delete thing.countryInfo
    // delete getCountryObject['countryInfo']
    // let test = 'countryInfo'
    // getCountry[test] = null

    // Convert the country object into an array
    let getCountryData = Object.entries(getCountryObject).map(([property,result]) => ({property, result}))
    // Remove not wanted properties from array
    const filterCountryData = getCountryData.filter(x => 
        x.property !== "countryInfo" && 
        x.property !== "updated" &&
        x.property !== "continent" && 
        x.property !== "oneCasePerPeople" && 
        x.property !== "oneDeathPerPeople" && 
        x.property !== "oneTestPerPeople" && 
        x.property !== "oneCasePerPeople"
    )

    // reorganise array

    // map array
    const mapCountryData = filterCountryData.map(x =>{
        return(
            <div key={x.key}>
                <span>{x.property} - {x.result}</span>
            </div>
        )
    })

    console.log(filterCountryData)
    

  return (

    <div className='latestStatsDisplay__container'>

        <div className='latestStatsDisplay__row' id="cases">
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>Cases</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(cases)}</span>
            </div>
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>Todays Cases</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(todayCases)}</span>
            </div>
            <div className='latestStatsDisplay__column'>
                <span className='latestStatsDisplay__property'>Cases /million</span>
                <span className='latestStatsDisplay__result'>{numberWithCommas(casesPerOneMillion)}</span>
            </div>
        </div>
        
    </div>








    // <div>
    //     <h1>Stats</h1>
    //     {mapCountryData}
    // </div>

    // <Container className='latestStatsDisplay'>
    //             <Row>
                    
                    
    //                     <Col lg={12} className=''>
    //                         <Col sm={4}>
    //                             <h6>Todays Case</h6> 
    //                             <p>{numberWithCommas(todayCases)}</p>
    //                         </Col>
    //                         <Col sm={4}>
    //                             <h6>Total Cases </h6>
    //                             <p>{numberWithCommas(cases)}</p>
    //                         </Col>

    //                         <Col sm={4}>
    //                             <h6>Cases /million</h6> 
    //                             <p>{numberWithCommas(casesPerOneMillion)}</p>
    //                         </Col>
    //                     </Col>
        
    //                     <Col lg={6} className=''>
    //                         <Col>
    //                             <h6>Todays Deaths</h6> 
    //                             <p>{numberWithCommas(todayDeaths)}</p>
    //                         </Col>
    //                         <Col>
    //                             <h6>Total Deaths</h6> 
    //                             <p>{numberWithCommas(deaths)}</p>
    //                         </Col>

    //                         <Col>
    //                             <h6>Deaths /million</h6>
    //                             <p>{numberWithCommas(deathsPerOneMillion)}</p>
    //                         </Col>
    //                     </Col>                   
                                                
    //                     <Row className=''>
    //                         <Col>
    //                             <h6>Recovered Today</h6> 
    //                             <p>{numberWithCommas(todayRecovered)}</p>
    //                         </Col>

    //                         <Col>
    //                             <h6>Total Recovered</h6>
    //                             <p>{numberWithCommas(recovered)}</p>
    //                         </Col>

    //                         <Col>
    //                             <h6>Recovered /million</h6> 
    //                             <p>{numberWithCommas(recoveredPerOneMillion)}</p>
    //                         </Col>
    //                     </Row>
                    
    //                     <Row className=''>
    //                         <Col>
    //                             <h6>Total Tests </h6>
    //                             <p>{numberWithCommas(tests)}</p>
    //                         </Col>

    //                         <Col>
    //                             <h6>Tests /million</h6>
    //                             <p>{numberWithCommas(testsPerOneMillion)}</p>
    //                         </Col>
    //                     </Row>
                    
    //                     <Row className=''>
    //                         <Col>
    //                             <h6>Critical </h6>
    //                             <p>{numberWithCommas(critical)}</p>
    //                         </Col>
    //                         <Col>
    //                             <h6>Critical /million</h6> 
    //                             <p>{numberWithCommas(criticalPerOneMillion)}</p>
    //                         </Col>
    //                     </Row>                    
                    
    //                     <Row className=''>
    //                         <Col>
    //                             <h6>Active</h6>
    //                             <p>{numberWithCommas(active)}</p>
    //                         </Col>

    //                         <Col>
    //                             <h6>Active /million</h6>
    //                             <p>{numberWithCommas(activePerOneMillion)}</p>
    //                         </Col> 
    //                     </Row>               
                    
    //                     <Row className=''>
    //                         <Col>
    //                             <h6>Total Vaccines</h6> 
    //                             <p>{numberWithCommas(totalVaccines)}</p>
    //                         </Col>

    //                         <Col>
    //                             <h6>Population</h6>
    //                             <p>{numberWithCommas(population)}</p>
    //                         </Col> 
    //                     </Row>
                    
    //             </Row>
    //         </Container>
  )
}
