import React from 'react'

import './totalStats.css'

export default function TotalStats(props) {
  const data = props.data.cases
  // console.log(data)

// For adding objects within an array
  //   const sum = [data.cases].reduce((partialSum,a) => partialSum + a,0)

// Useful for adding values withing an object
  //  console.log(Object.values(data.cases).reduce((t,n ) => t + n))
  if(props.data !== null){
    console.log(data)
    // console.log(data[4/17/22])
  }

  return (
    <div className='slide s1 totalStats__wrapper'>
        <div>Total Cases</div>
        <div>Total Deaths</div>
        <div>Total Vaccines Received</div>
        <div>28 Day Cases</div>
        <div>28 Day Deaths</div>
        <div>28 Day Vaccines Received</div>
    </div>
  )
}

//134,355,861,486