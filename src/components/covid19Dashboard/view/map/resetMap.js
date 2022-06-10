import React from 'react'

export default function ResetMap(props) {

  const {resetMap} = props
  const style = { 
    // transform:'translateX(' + slidePosition + '%)' ,
    backgroundColor: "#2a2e32",
    cursor:"pointer",
    marginTop:"75px",
    marginLeft:"15px",
    zIndex:"999"
  }

  return (

    <div style={style} className='resetMap position-absolute' onClick={resetMap}>
      <span className="material-icons p-2" title="Return to favourite">star</span>
    </div>
    
  )
}
