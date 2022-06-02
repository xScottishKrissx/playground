import React from 'react'
import { Row, Col } from 'react-bootstrap'
import './latest.css'
import loadingGif from '../../../assets/loading.gif'
import Graph from '../graphs/graph';
export default function Latest(props) {    

    // const [loading, setLoading] = useState()

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const {data,country, countryVaccine, covidTimeline} = props
    const filterCountry = data.filter(x => x.country === country)
    const getCountry = filterCountry[0]
    // Deleting an object from object array
    // delete getCountry.countryInfo


    // Don't return anything while user is typing
    if(!getCountry)return (
        <h1>searching for a match...  <img alt="results are loading" src={loadingGif} /></h1>
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
        population,
        continent
    } = getCountry

    // const {flag} = countryInfo
    
    const getVaccineData = countryVaccine[0].timeline
    let getVaccineTimeline = Object.entries(getVaccineData).map(([date,number]) => ({date, number}))
    const totalVaccines = getVaccineTimeline.reverse()[0].number

    // Converting object array to be used for map
    // const getThing = Object.entries(getCountry).map(([point1, point2]) => ({point1, point2}))
    // const mapThing = getThing.map(x => {
    //     return(
    //         <div>
    //             <p>{x.point1}</p>
    //             <p>{x.point2}</p>
    //         </div>
    //     )
    // })
    
    return (
        <div className='covid19Dashboard__latestContainer'>
            
            
        
            <div className='locationInfo'>
                <span className='fs-5 ms-3 me-2 text-muted' >{continent} &gt;</span>
                {/* &gt;        */}
                <span className='fs-3' > 
                    {/* <img alt={"Flag of " + country} src={flag} />  */}
                    {country} 
                </span>
                
            </div>

            <Row className='latestStatsDisplay text-center align-items-center'>
                <Col lg={6}>
                    
                    <Col id="latestCases">
                        <div>
                            <h6>Todays Case</h6> 
                            <p>{numberWithCommas(todayCases)}</p>
                        </div>

                        <div className='d-flex align-items-center justify-content-evenly'>
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

                    
                    <Col id="latestDeaths">
                        <div>
                            <h6>Todays Deaths</h6> 
                            <p>{numberWithCommas(todayDeaths)}</p>
                        </div>

                        <div className='d-flex align-items-center justify-content-evenly'>
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
                        <div>
                            <h6>Recovered Today</h6> 
                            <p>{numberWithCommas(todayRecovered)}</p>
                        </div>

                        <div className='d-flex align-items-center justify-content-evenly'>
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
                                <h6>Total Tests: </h6>
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
                                <h6>Critical: </h6>
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


            {covidTimeline.length < 1 ? 
                <p>*Graph not available</p> 
                : 
                <Graph data={covidTimeline} countryVaccine={countryVaccine}/>
            }
            
        </div>
    )
}
