import React from 'react'
import {Marker  } from 'react-leaflet';
import L from 'leaflet'

import './markers.css'
export default function Markers(props) {

    const {countryData, toggleInfoPanel} = props

    const favIcon = new L.icon({
        iconRetinaUrl: require('../../../../assets/marker-icon-2x-gold.png'),
        iconUrl: require('../../../../assets/marker-icon-gold.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
        className: "markedAsFav"
    })

    const normalIcon = new L.icon({
        iconRetinaUrl: require('../../../../assets/marker-icon-2x-blue.png'),
        iconUrl: require('../../../../assets/marker-icon-blue.png'),
        shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    })
    
  return (
      <>
        {countryData.map((x,index) => {

            return(
            <span 
            // className={x.country === "UK" ? `${x.country} markedAsFav` : x.country } 
            className={x.country } 
            key={index}>
                <Marker 
                    icon={x.country === "UK" ? favIcon : normalIcon}
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
