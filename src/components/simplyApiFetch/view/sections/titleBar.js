import React from 'react'

export default function TitleBar(props) {
  return (
      <>
            {/* Title */}
            <div className='simpleApiFetch__viewContainerTitle'>

            <div role="button" onClick={props.getNewUser} className='ms-3 me-5'>
               <span ><span className="material-icons">autorenew</span></span> 
            </div>

            <div className='simpleApiFetch__title'>
                <h5>{props.firstName} {props.lastName}</h5>
                <span className='text-white-50'>{props.age * 123} Tweets</span>
            </div>
            
        </div>
    </>
  )
}
