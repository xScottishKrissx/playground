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

    const user = newUser || startingUser

  return (
    <div className='simpleApiFetch__viewContainer'>
        <button onClick={()=>getNewUser()}>Generate New user</button>
        <p>Name: {user.name.first} {user.name.last}</p>


    </div>
  )
}
