import React from 'react'

export default function UserInformation(props) {
  const linkAddress = props.location.city
  return (
    <div className='simpleApiFetch__userAccountInfo d-flex align-items-center w-75 '>

        <span className='locationLink text-white-50 d-flex'><span className="material-icons">location_on</span>
          
          <a className='text-white' href={"https://www.google.com/maps/search/" + linkAddress.toLowerCase()} >{props.location.city +", " + props.nat} </a>
        
        </span>


        <span className='text-info d-flex'><span className="material-icons">link</span>{props.firstName.toLowerCase() + props.lastName.toLowerCase() + ".com"}</span>
        <span className='text-white-50 d-flex '><span className="material-icons">calendar_month</span>Joined {props.joinDate}</span>
    </div>
  )
}
