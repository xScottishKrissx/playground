import React from 'react'
import UserAvatarAndFollow from './userProfile/userAvatarAndFollow'
import UserDescription from './userProfile/userDescription'
import UserInformation from './userProfile/userInformation'
// import UserRelatedUsers from './userProfile/userRelatedUsers'
import UserStats from './userProfile/userStats'

export default function UserProfile(props) {

  const user = props.user

  //   Date
  const dateOptions = { year: 'numeric', month: 'long', }
  const convertDate = Date.parse(user.registered.date)
  let myDate = new Date(convertDate)
  const joinDate = myDate.toLocaleDateString('en-GB', dateOptions)



  return (
        <div className='simpleApiFetch__userInformationWrapper'>
            
            <UserAvatarAndFollow picture={user.picture.large} firstName={user.name.first} lastName={user.name.last} age={user.dob.age} nat={user.nat} />
            <UserDescription password={user.login.password}/>
            <UserInformation nat={user.nat} location={user.location} firstName={user.name.first} lastName={user.name.last} joinDate={joinDate} />
            <UserStats />
            {/* <UserRelatedUsers /> */}

        </div>
  )
}
