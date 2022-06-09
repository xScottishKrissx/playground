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
// console.log(L)

  // Setting up the map
  // setting the center on the current favourite country if the user has changed from the default
  const usersFavCountry = localStorage.getItem("favCountry") || "UK"
  const favCountryLat = parseInt(localStorage.getItem("lat")) || 55.8130
  const favCountryLong = parseInt(localStorage.getItem("long")) || -4.3424
  const location =  [favCountryLat, favCountryLong]

  
  
  const zoom = 4
  const mapRef = useRef()

  
  // information panel
  const [showPanel, setPanelVisible] = useState(false)
  const [countryInfo, setCountryInfo] = useState()
  const [updateMarkerState, setUpdatedMarker] = useState()
  const toggleInfoPanel = (x,lat,lng) =>{ 
    setCountryInfo(x)
    // setTest(x.country)
    // console.log(x.country)
    setPanelVisible(true)
    mapRef.current.setView(new L.LatLng(lat, lng), zoom);
  }
  const hideInformationPanel = () =>{ setPanelVisible(false) }
  const updateMarker = (x) =>{ setUpdatedMarker(x) }
  
  const {countryData, countryVaccine} = props

 

  return (
    <div className='slide s2'>
      <MapContainer ref={mapRef} center={location} zoom={zoom} zoomControl={false} >

        <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
        <ZoomControl position='bottomleft' />

        <InformationPanel 
          showPanel={showPanel} 
          countryVaccine={countryVaccine} 
          countryData={countryInfo} 
          hideInformationPanel={hideInformationPanel}

          updateMarker={updateMarker}
        />

        <Markers 
          countryData={countryData} 
          toggleInfoPanel={toggleInfoPanel} 
          location={location} 
          favCountry={usersFavCountry}
          // updateMarkerState={updateMarkerState}
          />

      </MapContainer>
    </div>
  )
}
