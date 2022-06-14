import React from 'react'
import './informationPanel.css'
import { useState } from 'react';
import FavCountryView from '../../favCountryView';

export default function InformationPanel(props) {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

// Set a new favourite country
      const setNewCountry = (x) => {
          localStorage.setItem("favCountry", x)
      }

    const {countryData, hideInformationPanel, showPanel, countryVaccine, updateMarker} = props
    
    if(countryData === undefined) return

    const {
        country, 
        todayCases, 
        cases, 
        casesPerOneMillion, 
        critical, 
        criticalPerOneMillion, 
        recoveredPerOneMillion,
        deaths, 
        todayDeaths, 
        deathsPerOneMillion,
        population,
        countryInfo
    } = countryData
    // console.log(countryData)

    // Country location for favourite button
    const {lat, long} = countryInfo
    
//   Get vaccine data for country
    let getCountryVaccineInfo, totalVaccines;

    const mapThing = countryVaccine.map(x => { if(x.country === country) {getCountryVaccineInfo = x } })
    if(!getCountryVaccineInfo){
        // In case any nation doesn't upload vaccination data(e.g. north korea)
        totalVaccines = "n/a"
    }else{
        const getVaccineData = getCountryVaccineInfo.timeline
        let getVaccineTimeline = Object.entries(getVaccineData).map(([date,number]) => ({date, number}))
        totalVaccines = getVaccineTimeline.reverse()[0].number
    }


  return (

    <>
    {showPanel ? 

        <div className='map__informationPanelWrapper'>
            <div className='map__informationPanelContent'>

                <div className='informationPanel__header'>
                    <div className='informationPanel__mainHeader'>
                        <h2>Information Panel</h2>
                        <button onClick={hideInformationPanel}><span className="material-icons">close</span></button>
                    </div>
                    
                    <span onClick={()=>setNewCountry(country)} className='countryName fs-3'>
                        <FavCountryView country={country} lat={lat} long={long} updateMarker={updateMarker} />
                    </span>
                </div>


                <div className='informationPanel__stats'>

    {/* Cases Section */}
                    <div className='informationPanel__statsSection'>

                        <div className='informationPanel__singleItemRow'>
                            <span className='informationPanel__infoHeader'>Todays Cases</span> 
                            <span className='informationPanel__infoNumber'>{numberWithCommas(todayCases)}</span>
                        </div>

                        <div className='informationPanel__doubleItemRow'>
                            
                            <div>
                                <span className='informationPanel__infoHeader'>Total Cases</span> 
                                <span className='informationPanel__infoNumber'>{numberWithCommas(cases)}</span>
                            </div>

                            <div>
                                <span className='informationPanel__infoHeader' >Cases /million</span> 
                                <span className='informationPanel__infoNumber'>{numberWithCommas(casesPerOneMillion)}</span>
                            </div>

                        </div>

                    </div>

    {/* Critical Section */}
                    <div className='informationPanel__statsSection'>

                        <div className='informationPanel__singleItemRow'>
                            <span className='informationPanel__infoHeader'>Current Critical</span> 
                            <span className='informationPanel__infoNumber'>{numberWithCommas(critical)}</span>
                        </div>

                        <div className='informationPanel__doubleItemRow'>
                            
                            <div>
                                <span className='informationPanel__infoHeader'>Critical /million</span> 
                                <span className='informationPanel__infoNumber'>{numberWithCommas(criticalPerOneMillion)}</span>
                            </div>

                            <div>
                                <span className='informationPanel__infoHeader'>Recovered /million</span> 
                                <span className='informationPanel__infoNumber'>{numberWithCommas(recoveredPerOneMillion)}</span>
                            </div>



                        </div>

                    </div>

    {/* Deaths Section */}
                    <div className='informationPanel__statsSection'>

                        <div className='informationPanel__singleItemRow'>
                            <span className='informationPanel__infoHeader'>Todays Deaths</span> 
                            <span className='informationPanel__infoNumber'>{numberWithCommas(todayDeaths)}</span>
                        </div>

                        <div className='informationPanel__doubleItemRow'>
                            
                            <div>
                                <span className='informationPanel__infoHeader'>Total Deaths</span> 
                                <span className='informationPanel__infoNumber'>{numberWithCommas(deaths)}</span>
                            </div>

                            <div>
                                <span className='informationPanel__infoHeader' >Deaths /million</span> 
                                <span className='informationPanel__infoNumber'>{numberWithCommas(deathsPerOneMillion)}</span>
                            </div>

                        </div>

                    </div>
                    
    {/* Population Section */}
                    <div className='informationPanel__statsSection'>

                        <div className='informationPanel__singleItemRow'>
                            <span className='informationPanel__infoHeader'>Population</span> 
                            <span className='informationPanel__infoNumber'>{numberWithCommas(population)}</span>
                        </div>

                    </div>
    {/* Vaccinations Section */}
                    <div className='informationPanel__statsSection'>
                        <div className='informationPanel__singleItemRow'>
                            <span className='informationPanel__infoHeader'>Vaccinations</span> 
                            <span className='informationPanel__infoNumber'>{numberWithCommas(totalVaccines)}</span>
                        </div>
                    </div>

                </div>

    {/* Disclaimer */}
            <div className='latestStats__disclaimer'>
                <h6 className='ps-2 text-muted'>Disclaimer</h6>
                <p className='text-muted fs-6 ps-3 pe-3'>Countries submit their data at different times, formats and level of detail. This is why certain countries will report 0 cases(despite their still being cases) and some countries don't have graphs. </p>
            </div>

            </div>
        </div>

        : null
        }
    </>
  )
}
