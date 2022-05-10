import React from 'react'

export default function TitleBar(props) {
  let isOdd =  props.age % 2
  const showTick = isOdd ? <span className="material-icons">verified</span> : ""

  return (
      <>
            {/* Title */}
            <div className='simpleApiFetch__viewContainerTitle bg-dark text-white d-flex align-items-center p-1 position-absolute top-0 w-100'>

            <div title="Click for a new person" role="button" onClick={props.getNewUser} className='ms-3 me-3 setZIndex'>
               <span ><span className="material-icons">autorenew</span></span> 
            </div>

            <div className='simpleApiFetch__title'>
                <h5 className='d-flex p-0'>{props.firstName} {props.lastName} {showTick}</h5>
                <span className='text-white-50'>{props.age * 123} Tweets</span>
            </div>
            
        </div>
    </>
  )
}
