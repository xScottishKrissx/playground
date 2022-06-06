import React, {useRef, useState} from 'react'
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
  // const {countryData} = props
  const {countryData} = props
  // console.log(countryData[0])


  // custom tooltip
  const [showPanel, setPanelVisible] = useState(false)
  const [countryInfo, setCountryInfo] = useState()
  const toggleInfoPanel = (x) =>{ 
    setCountryInfo(x)
    setPanelVisible(true)
   }
   console.log(countryInfo)
  const hideCustomTooltip = () =>{ setPanelVisible(false) }

  return (
    <div className='slide s2'>
      <MapContainer ref={mapRef} center={location} zoom={zoom} zoomControl={false}>

        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <ZoomControl position='bottomleft' />


        {showPanel ? 
            <div className='map__informationPanelWrapper'>
              <div className='map__informationPanelContent'>
                <h1>Information Panel</h1>
                {countryInfo.country}
                <button onClick={hideCustomTooltip}>Close Panel</button>
              </div>
              
            </div>
            : 
            null
        }

        {countryData.map((x,index) => {
          return(
            <span key={index}>
              <Marker 
                eventHandlers={{ click: (e) =>{ toggleInfoPanel(x) } }} 
                position={[x.countryInfo.lat, x.countryInfo.long]}>
              </Marker>
            </span>
          )

        })}
      </MapContainer>
    </div>
  )
}
