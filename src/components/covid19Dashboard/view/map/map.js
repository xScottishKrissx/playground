import React, {useRef} from 'react'
import L from 'leaflet'
import './map.css'

import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { map } from 'leaflet';



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
  const zoom = 10

  const mapRef = useRef()
  // console.log(mapRef)
  // Destructuring
  const { current = {} } = mapRef

  


  return (
    <div className='slide s2'>
      <MapContainer ref={mapRef} center={location} zoom={zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <Marker position={location}>
          <Popup>
            Glasgow
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
