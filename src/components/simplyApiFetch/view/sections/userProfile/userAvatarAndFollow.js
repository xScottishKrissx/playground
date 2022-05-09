import React from 'react'

export default function UserAvatarAndFollow(props) {
  return (

        <>
        <div className='simpleApiFetch__userImage'>
            
            <div className='simpleApiFetch__userImage--picture'>
                <img alt={"user defined avatar"} src={props.picture}/>
                <h2>{props.firstName} {props.lastName}</h2>
                <span className='text-white-50'>{"@xx" + props.firstName.toLowerCase() + "__" + props.lastName.toLowerCase() + props.age + props.nat.toLowerCase()} </span>
            </div>
           
           <div className='simpleApiFetch__userImage--socialContainer'>
               <span id="simpleApiFetch__directMessageButton"><span className="material-icons"> mail_outline</span> </span>
               <span id="followButton">Follow</span>
           </div>

        </div>
        </>
  )
}
