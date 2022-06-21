import React from 'react'
import './latest.css'
import Graph from '../graphs/graph';
import Loading from '../../loading';
import LatestStatsDisplay from './latestStatsDisplay/latestStatsDisplay';
import LocationInfo from '../locationInfo/locationInfo';

export default function Latest(props) {    


    const {data,country, countryVaccine, covidTimeline, setNewCountry} = props
    const filterCountry = data.filter(x => x.country.toLowerCase() === country.toLowerCase())
    const getCountry = filterCountry[0]

    // Don't return anything while user is typing
    if(!getCountry) return  <Loading content="searching..."/>;
    
    const {continent, countryInfo, updated } = getCountry
    const {lat, long} = countryInfo

    return (
        <div className='covid19Dashboard__latestContainer'>

            <LocationInfo 
                country={country} 
                lat={lat} 
                long={long} 
                continent={continent} 
                updated={updated}
            />

            <LatestStatsDisplay data={data} country={country} countryVaccine={countryVaccine}/>

            {covidTimeline.length < 1 ? 
                <p className='ps-2 text-muted'>Graph not available</p> 
                : 
                <Graph data={covidTimeline} countryVaccine={countryVaccine}/>
            }

            <div className='latestStats__disclaimer'>
                <h6 className='ps-2 text-muted'>Disclaimer</h6>
                <p className='text-muted fs-6 ps-3 pe-3'>Countries submit their data at different times, formats and level of detail. This is why certain countries will report 0 cases(despite there still being cases) and some countries don't have graphs. While some countries will not fully report new data over the weekend. </p>
            </div>
            
        </div>
    )
}
