import React from 'react'

import './totalStats.css'

export default function TotalStats(props) {
  const data = props.data
  const vaccineData = props.vaccineData

  console.log(props.data)
  
  const getTotalCasesFromData = Object.entries(data.cases).reverse()[0][1]
  const totalCases = numberWithCommas(getTotalCasesFromData)

  const getTotalDeathsFromData = Object.entries(data.deaths).reverse()[0][1]
  const totalDeaths = numberWithCommas(getTotalDeathsFromData)

  const getTotalVaccinesFromData = Object.entries(vaccineData).reverse()[0][1]
  const totalVaccines = numberWithCommas(getTotalVaccinesFromData)


// For adding objects within an array
  //   const sum = [data.cases].reduce((partialSum,a) => partialSum + a,0)

// Useful for adding values withing an object
  //  console.log(Object.values(data.cases).reduce((t,n ) => t + n))

  // src: https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
  <>
      {!props.data ? <h1>Loading</h1> 

      :

      <div className='slide s1 totalStats__wrapper'>
          <div>Total Cases: {totalCases}</div>
          <div>Total Deaths: {totalDeaths}</div>
          <div>Total Vaccines Administered: {totalVaccines} </div>
          <div>28 Day Cases</div>
          <div>28 Day Deaths</div>
          <div>28 Day Vaccines Received</div>
      </div>
    }
  </>
  )
}

//134,355,861,486