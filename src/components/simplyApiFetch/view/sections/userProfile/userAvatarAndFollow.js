import React from 'react'

export default function UserAvatarAndFollow(props) {


  return (

        <>
        <div className='simpleApiFetch__userImage bg-dark text-white d-flex'>
            
            <div className='simpleApiFetch__userImage--picture'>

                <img alt={"user defined avatar"} src={props.picture}/>

                <h2 className='pt-2'>{props.firstName} {props.lastName}</h2>
                
                <span className='text-white-50'>{"@xx" + props.firstName.toLowerCase() + "__" + props.lastName.toLowerCase() + props.age + props.nat.toLowerCase()} </span>

            </div>
           
           <div className='simpleApiFetch__userImage--socialContainer d-flex p-3 justify-content-end w-100'>
               <span id="simpleApiFetch__directMessageButton"><span className="material-icons"> mail_outline</span> </span>
               <span id="followButton" className='bg-light text-dark ms-3 ps-2 pe-2'>Follow</span>
           </div>

        </div>
        </>
  )
}
