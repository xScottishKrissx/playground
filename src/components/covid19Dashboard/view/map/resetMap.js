import React from 'react'

export default function ResetMap(props) {

  const {resetMap} = props
  const style = { 
    cursor:"pointer",
    marginTop:"0px",
    zIndex:"999"
  }


  return (

    <div style={style} className='resetMap position-relative' onClick={resetMap}>
      <span  className="material-icons p-2 mt-1" title="Return to favourite">star</span>
    </div>
    
  )
}
