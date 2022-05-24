import React from 'react'
import { useState } from 'react'

import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'


export default function SimpleChartView(props) {

    const {data} = props

    const [userData, setUserData] = useState({
        // X Axis
        labels:data.map((x) => x.date),
        datasets:[{
            // Y Axis
            label:"Total Vaccination Progress(Last 30 Days)",
            // The actual data that will be represented.
            data:data.map((x) => x.number)
        }]
    })

  return (
    <div className='simpleChartView d-flex'>
      <span className='w-50'><LineChart  data={userData}/></span>
      <span className='w-50'><BarChart  data={userData}/></span>
    </div>
  )
}
