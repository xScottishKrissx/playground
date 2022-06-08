import React, {useRef, useState, } from 'react'
import L from 'leaflet'
import './map.css'

import {MapContainer, TileLayer, Marker, ZoomControl, } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { map } from 'leaflet';

import InformationPanel from './informationPanel/informationPanel';
import Markers from './informationPanel/markers/markers';

export default function Covid19Map(props) {




  // Fixes the broken icon for the marker
  delete L.Icon.Default.prototype.__getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
  })
  //end of fix

  // Setting up the map
  const location = [55.8130,-4.3424]
  const zoom = 4
  const mapRef = useRef()
  const {countryData, countryVaccine} = props

  // information panel
  const [showPanel, setPanelVisible] = useState(false)
  const [countryInfo, setCountryInfo] = useState()
  const toggleInfoPanel = (x,lat,lng) =>{ 
    setCountryInfo(x)
    setPanelVisible(true)
    mapRef.current.setView(new L.LatLng(lat, lng), zoom);
   }
  const hideInformationPanel = () =>{ setPanelVisible(false) }


  return (
    <div className='slide s2'>
      <MapContainer ref={mapRef} center={location} zoom={zoom} zoomControl={false} >

        <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <ZoomControl position='bottomleft' />

        <InformationPanel showPanel={showPanel} countryVaccine={countryVaccine} countryInfo={countryInfo} hideInformationPanel={hideInformationPanel}/>

        <Markers countryData={countryData} toggleInfoPanel={toggleInfoPanel}/>
        
      </MapContainer>
    </div>
  )
}
