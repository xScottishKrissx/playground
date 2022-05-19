import React from 'react'

import './totalStats.css'

import { Container, Row, Col } from 'react-bootstrap'

export default function TotalStats(props) {
  // const data = props.data
  const vaccineData = props.vaccineData
  // console.log(vaccineData)
  console.log(props.data)



  // const getTotalCasesFromData = Object.entries(data.cases).reverse()[0][1]
  // const totalCases = numberWithCommas(getTotalCasesFromData)

  // const getTotalDeathsFromData = Object.entries(data.deaths).reverse()[0][1]
  // const totalDeaths = numberWithCommas(getTotalDeathsFromData)

  const getTotalVaccinesFromData = Object.entries(vaccineData).reverse()[0][1]
  const totalVaccines = numberWithCommas(getTotalVaccinesFromData)

  // const countryData = props.countryData
  // console.log(data)


// For adding objects within an array
  //   const sum = [data.cases].reduce((partialSum,a) => partialSum + a,0)

// Useful for adding values withing an object
  //  console.log(Object.values(data.cases).reduce((t,n ) => t + n))

  // src: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
  <>
      {!props.data ? <h1>Loading</h1> 

      :
      <div className='slide s1 totalStats__wrapper'>
        <h1>Global Stats</h1>
        <div className='totalStats__statBoxContainer'>

{/* Row 1 */}
          <Row>

            <Col id="cases">
                <div>
                  <div>Todays Cases </div>
                  <div>{numberWithCommas(props.data.todayCases)}</div>
                </div> 

                <div>
                  <div>Total Cases</div> 
                  <div>{numberWithCommas(props.data.cases)}</div>
                </div> 

                <div>
                  <div>Cases Per Million: </div>
                  <div>{numberWithCommas(props.data.casesPerOneMillion)}</div>
                </div>  
            </Col>

            <Col id="deaths">
              <div>
                <div>Todays Deaths</div>
                <div>{numberWithCommas(props.data.todayDeaths)}</div>
              </div>

              <div>
                <div>Total Deaths</div> 
                <div>{numberWithCommas(props.data.deaths)}</div>
              </div>

              <div>
                <div>Deaths per Million</div>
                <div>{numberWithCommas(props.data.deathsPerOneMillion)}</div>
              </div>
            </Col>
                    
            <Col id="recovered">
              <div>
                <div>Today Recovered</div> 
                <div>{numberWithCommas(props.data.todayRecovered)}</div>
              </div>

              <div>
                <div>Total Recovered</div>
                <div>{numberWithCommas(props.data.recovered)}</div>
              </div>

              <div>
                <div>recovered per million</div>
                <div>{numberWithCommas(props.data.recoveredPerOneMillion)}</div>
              </div>
            </Col>

          </Row>

{/* Row 2 */}
          <Row>
          <Col id="tests">        
              <div>
                <div>Total Tests</div>
                <div>{numberWithCommas(props.data.tests)}</div>
              </div>

              <div>
                <div>Test Per Million</div> 
                <div>{numberWithCommas(props.data.testsPerOneMillion)}</div>
              </div>
            </Col>
            
            <Col id="critical">
              <div>
                <div>Critical:</div> 
                <div>{numberWithCommas(props.data.critical)}</div>
              </div>

              <div>
                <div>Critical Per Million:</div> 
                <div>{numberWithCommas(props.data.criticalPerOneMillion)}</div>
              </div> 
            </Col>

            <Col id="active">
              <div>
                <div>Total Active</div> 
                <div>{numberWithCommas(props.data.active)}</div>
              </div>

              <div>
                <div>Active Per Mil</div>
                <div>{numberWithCommas(props.data.activePerOneMillion)}</div>
              </div>
            </Col>
            


          </Row>

{/* Row 3 */}
          <Row id="vaccines">
            <Col>
              <div>
                <div>Total Vaccines Administered</div> 
                <div>{totalVaccines}</div>
              </div>
            </Col>
          </Row>
          <p>Updated: {props.data.updated}</p>
        </div>
      </div> 
    }
  </>
  )
}

//134,355,861,486