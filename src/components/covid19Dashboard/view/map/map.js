import React, {useRef, useEffect} from 'react'
import L from 'leaflet'
import './map.css'

import {MapContainer, TileLayer, Marker, Popup,ZoomControl, Tooltip} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { map } from 'leaflet';

import nationalParks from './nationalParks.json'

export default function Covid19Map(props) {
  // console.log(props.countryData)

  // Fixes the broken icon for the marker
  delete L.Icon.Default.prototype.__getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  })
  //end of fix

  const location = [55.8130,-4.3424]
  const zoom = 4

  const mapRef = useRef()
  const {countryData} = props
  console.log(countryData[0])

  return (
    <div className='slide s2'>
      <MapContainer ref={mapRef} center={location} zoom={zoom} zoomControl={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <ZoomControl position='bottomleft' zoomInText='in' zoomOutText='out'/>
        {/* <Marker position={location}></Marker> */}
        
        {countryData.map((x,index) => {
          return(
            <>
            
            <Marker key={index} position={[x.countryInfo.lat, x.countryInfo.long]}>

            <Tooltip direction='top' offset={[-15,-15]}  position={[x.countryInfo.lat, x.countryInfo.long]}>
              <p>{x.country}</p>
              <p>Cases: {x.cases}</p>
              <p>Deaths: {x.deaths}</p>
            </Tooltip>

            </Marker>
            </>
          )
        })}
      </MapContainer>
    </div>
  )
}
