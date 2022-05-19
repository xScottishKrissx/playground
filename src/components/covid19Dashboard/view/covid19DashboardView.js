import React from 'react'
import { useState } from 'react'

import ControlButtons from './buttons/buttons'
import Covid19Map from './map/map'
import Search from './search/search'
import TotalStats from './totalStats/totalStats'

export default function Covid19DashboardView(props) {
  // console.log("Render")
    // Form Input
    const getInput = (x) =>{ props.setInput(x) }
    
    // Controls
    const [position,setPos] = useState(0)
    const slideWrapperPosition = { transform: "translateX(" + position + '%)'}
    const setPositionState = (x) =>{ setPos(x)}

    const {loading, globalData, countryData, vaccineData, testMessage} = props

    return (
        <div className='covid19DashboardContainer'>
          {/* {loading ? <p>Loading</p> : <View data={apiData} startingCountry={startingCountry} />} */}

          {loading ? <p>Loading</p>
          
          :
          
          <>
            <div style={slideWrapperPosition} className='slideWrapper'>
                <TotalStats data={globalData} countryData={countryData} vaccineData={vaccineData}/>
                <Covid19Map countryData={countryData} />
                <Search testMessage={testMessage} data={countryData} setInput={getInput}/>
            </div>
            <ControlButtons setPos={setPositionState} position={position}/>
          </>

      }
      </div>
    )
}
