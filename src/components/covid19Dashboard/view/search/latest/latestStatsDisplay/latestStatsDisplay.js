import React from 'react'

import { Container,Row, Col } from 'react-bootstrap'
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
    <Container className='latestStatsDisplay'>
                <Row>
                    
                    
                        <Col lg={12} className=''>
                            <Col sm={4}>
                                <h6>Todays Case</h6> 
                                <p>{numberWithCommas(todayCases)}</p>
                            </Col>
                            <Col sm={4}>
                                <h6>Total Cases </h6>
                                <p>{numberWithCommas(cases)}</p>
                            </Col>

                            <Col sm={4}>
                                <h6>Cases /million</h6> 
                                <p>{numberWithCommas(casesPerOneMillion)}</p>
                            </Col>
                        </Col>
        
                        <Col lg={6} className=''>
                            <Col>
                                <h6>Todays Deaths</h6> 
                                <p>{numberWithCommas(todayDeaths)}</p>
                            </Col>
                            <Col>
                                <h6>Total Deaths</h6> 
                                <p>{numberWithCommas(deaths)}</p>
                            </Col>

                            <Col>
                                <h6>Deaths /million</h6>
                                <p>{numberWithCommas(deathsPerOneMillion)}</p>
                            </Col>
                        </Col>                   
                                                
                        <Row className=''>
                            <Col>
                                <h6>Recovered Today</h6> 
                                <p>{numberWithCommas(todayRecovered)}</p>
                            </Col>

                            <Col>
                                <h6>Total Recovered</h6>
                                <p>{numberWithCommas(recovered)}</p>
                            </Col>

                            <Col>
                                <h6>Recovered /million</h6> 
                                <p>{numberWithCommas(recoveredPerOneMillion)}</p>
                            </Col>
                        </Row>
                    
                        <Row className=''>
                            <Col>
                                <h6>Total Tests </h6>
                                <p>{numberWithCommas(tests)}</p>
                            </Col>

                            <Col>
                                <h6>Tests /million</h6>
                                <p>{numberWithCommas(testsPerOneMillion)}</p>
                            </Col>
                        </Row>
                    
                        <Row className=''>
                            <Col>
                                <h6>Critical </h6>
                                <p>{numberWithCommas(critical)}</p>
                            </Col>
                            <Col>
                                <h6>Critical /million</h6> 
                                <p>{numberWithCommas(criticalPerOneMillion)}</p>
                            </Col>
                        </Row>                    
                    
                        <Row className=''>
                            <Col>
                                <h6>Active</h6>
                                <p>{numberWithCommas(active)}</p>
                            </Col>

                            <Col>
                                <h6>Active /million</h6>
                                <p>{numberWithCommas(activePerOneMillion)}</p>
                            </Col> 
                        </Row>               
                    
                        <Row className=''>
                            <Col>
                                <h6>Total Vaccines</h6> 
                                <p>{numberWithCommas(totalVaccines)}</p>
                            </Col>

                            <Col>
                                <h6>Population</h6>
                                <p>{numberWithCommas(population)}</p>
                            </Col> 
                        </Row>
                    
                </Row>
            </Container>
  )
}
