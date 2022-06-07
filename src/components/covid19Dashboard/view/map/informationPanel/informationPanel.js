import React from 'react'
import './informationPanel.css'

export default function InformationPanel(props) {

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }

    const {countryInfo, hideCustomTooltip, showPanel} = props

    if(countryInfo === undefined) return
    console.log(countryInfo)
    const {country, todayCases, cases, casesPerOneMillion} = countryInfo
    
  return (

    <>
    {showPanel ? 

        <div className='map__informationPanelWrapper'>
            <div className='map__informationPanelContent'>
                <h1>Information Panel</h1>
                <button onClick={hideCustomTooltip}>Close Panel</button>
                {country}

                <div className='informationPanel__stats'>

    {/* Cases Section */}
                    <div className='informationPanel__statsSection'>

                        <div className='informationPanel__singleItemRow'>
                            <span className='informationPanel__infoHeader'>Cases</span> 
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
                            <span className='informationPanel__infoHeader'>Critical</span> 
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

    {/* Deaths Section */}
                    <div className='informationPanel__statsSection'>

                        <div className='informationPanel__singleItemRow'>
                            <span className='informationPanel__infoHeader'>Deaths</span> 
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
                    
    {/* Population Section */}
                    <div className='informationPanel__statsSection'>

                        <div className='informationPanel__singleItemRow'>
                            <span className='informationPanel__infoHeader'>Population</span> 
                            <span className='informationPanel__infoNumber'>{numberWithCommas(todayCases)}</span>
                        </div>

                    </div>
    {/* Vaccinations Section */}
                    <div className='informationPanel__statsSection'>

                        <div className='informationPanel__singleItemRow'>
                            <span className='informationPanel__infoHeader'>Vaccinations</span> 
                            <span className='informationPanel__infoNumber'>{numberWithCommas(todayCases)}</span>
                        </div>

                    </div>

                </div>

            </div>
        </div>

        : null
        }
    </>
  )
}
