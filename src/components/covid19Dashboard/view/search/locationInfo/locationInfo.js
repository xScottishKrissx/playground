import React from 'react'
import FavCountryView from '../../favCountryView'
import Updated from '../../updated'
import './locationInfo.css'

export default function LocationInfo(props) {

    const {updated, country, lat, long, continent} = props
    const updateMarker = (x) =>{ return x }

    return (
            <div className='locationInfo__container'>
                
                    <div className="locationInfo__country" > 
                        <FavCountryView country={country} lat={lat} long={long} updateMarker={updateMarker}/>
                    </div>

                    <div className="locationInfo__continent " >
                       <span> {continent}</span>
                    </div>

                    <div className='locationInfo__updated '>
                        <span >Updated</span> 
                        <span><Updated updated={updated} /></span>
                    </div> 
                    

                
            </div>
    )
}
