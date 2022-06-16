import React from 'react'
import { useState } from 'react'

import ControlButtons from './buttons/buttons'
import Loading from './loading'
import Covid19Map from './map/map'
import Search from './search/search'
import TotalStats from './totalStats/totalStats'

export default function Covid19DashboardView(props) {

    // Controls
    const [position,setPos] = useState(0)
    const slideWrapperPosition = { transform: "translateX(" + position + '%)'}
    const setPositionState = (x) =>{ setPos(x)}

    const {loading, globalData, countryData, vaccineData, testMessage, covidTimeline, countryVaccine} = props

    // console.log(props)
  
    return (
        <div className='covid19DashboardContainer'>
          
          {loading ? <Loading content="loading data" />
          
          :
          
          <>
            <div style={slideWrapperPosition} className='slideWrapper'>
                <TotalStats data={globalData} countryData={countryData} vaccineData={vaccineData}/>
                <Covid19Map countryData={countryData} countryVaccine={countryVaccine}/>
                <Search 
                  testMessage={testMessage} 
                  data={countryData} 
                  covidTimeline={covidTimeline}
                  vaccineData={vaccineData}
                  countryVaccine={countryVaccine}
                  // setInput={getInput}
                  />
                
            </div>
            <ControlButtons setPos={setPositionState} position={position}/>
          </>

    }
      </div>
    )
}
