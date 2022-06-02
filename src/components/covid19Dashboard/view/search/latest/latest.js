import React from 'react'

import './latest.css'
import Graph from '../graphs/graph';
import Loading from '../../loading';
import LatestStatsDisplay from './latestStatsDisplay/latestStatsDisplay';
export default function Latest(props) {    

    const {data,country, countryVaccine, covidTimeline} = props
    const filterCountry = data.filter(x => x.country === country)
    const getCountry = filterCountry[0]
    // Deleting an object from object array
    // delete getCountry.countryInfo


    // Don't return anything while user is typing
    if(!getCountry) return  <Loading content="searching for a match..."/>;
    
    const {continent, countryInfo, updated } = getCountry
    const {flag} = countryInfo
    console.log(updated)


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
                <span className='fs-3' > 
                    <img alt={"Flag of " + country} src={flag} /> 
                    {country} 
                </span>
            </div>

            <LatestStatsDisplay data={data} country={country} countryVaccine={countryVaccine}/>

            {covidTimeline.length < 1 ? 
                <p className='ps-2 text-muted'>Graph not available</p> 
                : 
                <Graph data={covidTimeline} countryVaccine={countryVaccine}/>
            }

            <div className='latestStats__disclaimer'>
                <h6 className='ps-2 text-muted'>Disclaimer</h6>
                <p className='text-muted fs-6 ps-3 pe-3'>Countries submit their data at different times, formats and level of detail. This is why certain countries will report 0 cases(despite their still being cases) and some countries don't have graphs. </p>
            </div>
            
        </div>
    )
}
