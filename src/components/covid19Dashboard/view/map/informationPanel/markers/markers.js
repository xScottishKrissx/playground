import React from 'react'
import {Marker,  } from 'react-leaflet';
export default function Markers(props) {

    const {countryData, toggleInfoPanel} = props
    
  return (
      <>
        {countryData.map((x,index) => {
            
            return(
            <span className={x.country} key={index}>
                <Marker 
                    eventHandlers={{ click: (e) =>{ 
                        toggleInfoPanel(x , x.countryInfo.lat, x.countryInfo.long)     
                    }}} 
                    position={[x.countryInfo.lat, x.countryInfo.long]}>
                </Marker>
            </span>
            )

        })}
      </>
  )
}
