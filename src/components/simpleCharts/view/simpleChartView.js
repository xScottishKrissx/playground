import React from 'react'
import { useState } from 'react'

import BarChart from '../components/BarChart'
import LineChart from '../components/LineChart'
import { Row, Col } from 'react-bootstrap'

export default function SimpleChartView(props) {

    const {data} = props
    // console.log(props)

    // Global Data
    const [userData] = useState({
        // X Axis
        labels:data.globalData.map((x) => x.date),
        datasets:[{
            // Y Axis
            label:"Global Vaccination Progress(Last 30 Days)",
            // The actual data that will be represented.
            data:data.globalData.map((x) => x.number),
            backgroundColor: '#4ACE47'
        }]
    })

    // UK Data
    const [ukData] = useState({
      labels:data.ukData.map((x) => x.date),
      datasets:[{
        label:"Cumulative Vaccines in United Kingdom(Last 30 Days)",
        data:data.ukData.map((x) => x.number),
        backgroundColor: '#42B7D4'
      }]
    })


  return (
    <Row className='simpleChartView d-flex' col-lg={12}>
      <Col className='' lg={6}><LineChart  data={userData}/></Col>
      <Col className='' lg={6}><BarChart  data={ukData}/></Col>
    </Row>
  )
}
