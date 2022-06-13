import React from 'react'

import goldMarker  from '../../assets/marker-icon-gold.png'

export default function ResetMap(props) {

  const {resetMap} = props
  const style = { 
    cursor:"pointer",
    marginTop:"0px",
    zIndex:"999"
  }


  return (

    <div style={style} className='resetMap position-relative mt-1' onClick={resetMap} title="Return to favourite">
      {/* <span  className="material-icons p-2 mt-1" title="Return to favourite">star</span> */}

        <img src={goldMarker} alt="Return to favourite" />
      

    </div>
    
  )
}
