import React, { useState } from 'react'
import BannerImage from './sections/bannerImage';
import TitleBar from './sections/titleBar';
import UserProfile from './sections/userProfile';

import './view.css'
export default function View(props) {

    const [newUser, setNewUser] = useState()

    let getRandomNumber = props.randomUser(props.data);
    let startingUser = props.data[getRandomNumber]

    if(!newUser)setNewUser(props.data[getRandomNumber])
    
    const getNewUser = () => {
        setNewUser(props.data[getRandomNumber])
    }

    
    const user = newUser || startingUser
    const imgUrl = "https://unsplash.it/1920/1080?random=" + user.registered.age + user.dob.age;

    return (
        <div className='simpleApiFetch__viewContainer d-flex flex-column w-100 '>

            <TitleBar firstName={user.name.first} lastName={user.name.last} age={user.dob.age} getNewUser={getNewUser} />
            <BannerImage imgUrl={imgUrl}/>
            <UserProfile user={user} />

        </div>
    )
}
