import userEvent from '@testing-library/user-event';
import React, { useState } from 'react'
import './view.css'
export default function View(props) {

    const [newUser, setNewUser] = useState()

    let getRandomNumber = props.randomUser(props.data);
    let startingUser = props.data[getRandomNumber]

    if(!newUser)setNewUser(props.data[getRandomNumber])

    const getNewUser = () => {
        setNewUser(props.data[getRandomNumber])
    }

    const imgUrl = "https://unsplash.it/1920/1080?random=" + getRandomNumber;
    const user = newUser || startingUser

    const dateOptions = {
        // weekday: 'long',
        year: 'numeric',
        month: 'long',
        // day: 'numeric',
        // hour:'numeric',
        // minute:'numeric'
    }

    const dateTest = user.registered.date
    const convertDate = Date.parse(dateTest)

    let myDate = new Date(convertDate)
    console.log(myDate.toISOString().split('T')[0])
    console.log(myDate.getMonth() + 1)
    console.log(myDate.getFullYear())
    console.log(myDate.toLocaleDateString('en-GB', dateOptions))
    const joinDate = myDate.toLocaleDateString('en-GB', dateOptions)

  return (
    <div className='simpleApiFetch__viewContainer'>
        {/* <button onClick={()=>getNewUser()}>Generate New user</button>
        <p>Name: {user.name.first} {user.name.last}</p> */}

        {/* Title */}
        <div className='simpleApiFetch__viewContainerTitle'>

            <div onClick={()=>getNewUser()} className='ms-3 me-5'>
               <span ><span className="material-icons">autorenew</span></span> 
            </div>

            <div>
                <h3>{user.name.first} {user.name.last}</h3>
                <span>{user.dob.age * 123} Tweets</span>
            </div>
            
        </div>

        {/* Banner Image */}
        <div className='simpleApiFetch__bannerImage'><img src={imgUrl}/></div>

        <div className='simpleApiFetch__userInformationWrapper'>

        {/* User Image */}
        <div className='simpleApiFetch__userImage'>
            <div className='simpleApiFetch__userImage--picture'>
                <img src={user.picture.large}/>
                <h2>{user.name.first} {user.name.last}</h2>
                <span>{"@xx" + user.name.first.toLowerCase() + "__" + user.name.last.toLowerCase() + user.dob.age +"xx"} </span>
            </div>
           
           <div className='simpleApiFetch__userImage--socialContainer'>
               <span id="simpleApiFetch__directMessageButton"><span className="material-icons"> mail_outline</span> </span>
               <span id="followButton">Follow</span>
           </div>
        </div>

        {/* User Profile */}
        <div className='simpleApiFetch__description'>
            <span>Employee <span id="userHandle">@{user.login.password }andsons</span>  </span>
        </div>

        {/* User Information */}
        <div className='simpleApiFetch__userAccountInfo'>
            <span><span className="material-icons">location_on</span>{user.location.city}</span>
            <span><span className="material-icons">link</span>{user.name.first.toLowerCase() + user.name.last.toLowerCase() + ".com"}</span>
            <span><span className="material-icons">calendar_month</span>Joined {joinDate}</span>
        </div>

        {/* User Stats */}
        <div className='simpleApiFetch__userStats'>
            <span>{Math.floor((Math.random() * 123))} Following</span>
            <span>{Math.floor((Math.random() * 12345))} Following</span>
        </div>


        {/* Followed By */}
        <div>
            <span>Followed by randomly generated user names</span>
        </div>
        </div>






    </div>
  )
}
