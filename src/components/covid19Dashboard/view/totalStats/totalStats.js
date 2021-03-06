import React from 'react'

import './totalStats.css'

import { Row, Col } from 'react-bootstrap'
import Updated from '../updated'

export default function TotalStats(props) {
  const vaccineData = props.vaccineData

  const getTotalVaccinesFromData = Object.entries(vaccineData).reverse()[0][1]
  const totalVaccines = numberWithCommas(getTotalVaccinesFromData)

  // src: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

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
      updated
    } = props.data

  return (
  <>
      {!props.data ? <h1>Loading</h1> 

      :
      <div className='slide s1 totalStats__wrapper'>
        <h1 className='me-3 ms-3 mt-3'>Global Stats</h1>
        <div className='totalStats__statBoxContainer'>

{/* Row 1 */}
          <Row>

            <Col id="cases">
                <div>
                  <div>Todays Cases </div>
                  <div>{numberWithCommas(todayCases)}</div>
                </div> 

                <div>
                  <div>Total Cases</div> 
                  <div>{numberWithCommas(cases)}</div>
                </div> 

                <div>
                  <div>Cases Per Million: </div>
                  <div>{numberWithCommas(casesPerOneMillion)}</div>
                </div>  
            </Col>

            <Col id="deaths">
              <div>
                <div>Todays Deaths</div>
                <div>{numberWithCommas(todayDeaths)}</div>
              </div>

              <div>
                <div>Total Deaths</div> 
                <div>{numberWithCommas(deaths)}</div>
              </div>

              <div>
                <div>Deaths per Million</div>
                <div>{numberWithCommas(deathsPerOneMillion)}</div>
              </div>
            </Col>
                    
            <Col id="recovered">
              <div>
                <div>Today Recovered</div> 
                <div>{numberWithCommas(todayRecovered)}</div>
              </div>

              <div>
                <div>Total Recovered</div>
                <div>{numberWithCommas(recovered)}</div>
              </div>

              <div>
                <div>recovered per million</div>
                <div>{numberWithCommas(recoveredPerOneMillion)}</div>
              </div>
            </Col>

          </Row>

{/* Row 2 */}
          <Row>
          <Col id="tests">        
              <div>
                <div>Total Tests</div>
                <div>{numberWithCommas(tests)}</div>
              </div>

              <div>
                <div>Test Per Million</div> 
                <div>{numberWithCommas(testsPerOneMillion)}</div>
              </div>
            </Col>
            
            <Col id="critical">
              <div>
                <div>Critical</div> 
                <div>{numberWithCommas(critical)}</div>
              </div>

              <div>
                <div>Critical Per Million</div> 
                <div>{numberWithCommas(criticalPerOneMillion)}</div>
              </div> 
            </Col>

            <Col id="active">
              <div>
                <div>Total Active</div> 
                <div>{numberWithCommas(active)}</div>
              </div>

              <div>
                <div>Active Per Mil</div>
                <div>{numberWithCommas(activePerOneMillion)}</div>
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
          <p className='text-muted ps-3'>Updated: <Updated updated={updated} /></p>
        </div>
      </div> 
    }
  </>
  )
}