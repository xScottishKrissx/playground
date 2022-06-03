import React from 'react'

import { Row, Col } from 'react-bootstrap'
import Loading from '../../../loading';


export default function LatestStatsDisplay(props) {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const {data, country, countryVaccine} = props

    const filterCountry = data.filter(x => x.country.toLowerCase() === country.toLowerCase())
    const getCountry = filterCountry[0]

    // Don't return anything while user is typing
    if(!getCountry) return  <Loading content="latest stats display..."/>;

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
    } = getCountry

    const getVaccineData = countryVaccine[0].timeline
    let getVaccineTimeline = Object.entries(getVaccineData).map(([date,number]) => ({date, number}))
    const totalVaccines = getVaccineTimeline.reverse()[0].number

    

  return (
    <Row className='latestStatsDisplay text-center align-items-center'>
                <Col lg={6}>
                    
                    <Col>
                        <div className='d-flex align-items-center justify-content-evenly'>
                            <div>
                                <h6>Todays Case</h6> 
                                <p>{numberWithCommas(todayCases)}</p>
                            </div>
                            <div>
                                <h6>Total Cases </h6>
                                <p>{numberWithCommas(cases)}</p>
                            </div>

                            <div>
                                <h6>Cases Per Million</h6> 
                                <p>{numberWithCommas(casesPerOneMillion)}</p>
                            </div>
                        </div>
                    </Col>

                    
                    <Col>

                        <div className='d-flex align-items-center justify-content-evenly'>
                            <div>
                                <h6>Todays Deaths</h6> 
                                <p>{numberWithCommas(todayDeaths)}</p>
                            </div>
                            <div>
                                <h6>Total Deaths</h6> 
                                <p>{numberWithCommas(deaths)}</p>
                            </div>

                            <div>
                                <h6>Deaths Per Million</h6>
                                <p>{numberWithCommas(deathsPerOneMillion)}</p>
                            </div>
                        </div>
                    </Col>
                    
                    <Col>                    

                        <div className='d-flex align-items-center justify-content-evenly'>
                            <div>
                                <h6>Recovered Today</h6> 
                                <p>{numberWithCommas(todayRecovered)}</p>
                            </div>

                            <div>
                                <h6>Total Recovered</h6>
                                <p>{numberWithCommas(recovered)}</p>
                            </div>

                            <div>
                                <h6>Recovered Per Million</h6> 
                                <p>{numberWithCommas(recoveredPerOneMillion)}</p>
                            </div>
                        </div>
                    </Col>


                </Col>
                
                <Col lg={6}>
                    <Col>
                        <div className='d-flex align-items-center justify-content-evenly'>
                            <div>
                                <h6>Total Tests </h6>
                                <p>{numberWithCommas(tests)}</p>
                            </div>

                            <div>
                                <h6>Tests Per Million</h6>
                                <p>{numberWithCommas(testsPerOneMillion)}</p>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className='d-flex align-items-center justify-content-evenly'>
                            <div>
                                <h6>Critical </h6>
                                <p>{numberWithCommas(critical)}</p>
                            </div>
                            <div>
                                <h6>Critical Per Million</h6> 
                                <p>{numberWithCommas(criticalPerOneMillion)}</p>
                            </div>
                        </div>
                    </Col>

                    <Col>
                        <div className='d-flex align-items-center justify-content-evenly'>
                            <div>
                                <h6>Active</h6>
                                <p>{numberWithCommas(active)}</p>
                            </div>

                            <div>
                                <h6>Active Per Million</h6>
                                <p>{numberWithCommas(activePerOneMillion)}</p>
                            </div> 
                        </div>
                    </Col>

                    <Col>
                        <div className='d-flex align-items-center justify-content-evenly'>
                            <div>
                                <h6>Total Vaccines</h6> 
                                <p>{numberWithCommas(totalVaccines)}</p>
                            </div>

                            <div>
                                <h6>Population</h6>
                                <p>{numberWithCommas(population)}</p>
                            </div> 
                        </div>
                    </Col>

                </Col>
            </Row>
  )
}
