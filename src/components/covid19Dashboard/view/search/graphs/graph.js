import React from 'react'
import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {Row, Col} from 'react-bootstrap'

export default function Graph(props) {

    const {data, countryVaccine} = props
    
    const getTimelineData = data[0].timeline
    // console.log(data)
    
    let getCasesFromTimeline = Object.entries(getTimelineData.cases).map(([date,number]) => ({date, number}))
    const [chartData] = useState({
        labels:getCasesFromTimeline.map((x) => x.date),
        datasets:[{
            label:"Cases (Past 30 Days)",
            data:getCasesFromTimeline.map((x) => x.number),
            backgroundColor:"red"
        }]
    })

    let getDeathsFromTimeline = Object.entries(getTimelineData.deaths).map(([date,number]) => ({date, number}))
    const [deathData] = useState({
        labels:getDeathsFromTimeline.map((x) => x.date),
        datasets:[{
            label:"Deaths (Past 30 Days)",
            data:getDeathsFromTimeline.map((x) => x.number),
            backgroundColor:"red"
        }]
    })

    const getVaccineData = countryVaccine[0].timeline
    let getVaccineTimeline = Object.entries(getVaccineData).map(([date,number]) => ({date, number}))
    const [vaccineData] = useState({
        labels:getVaccineTimeline.map((x) => x.date),
        datasets:[{
            label:"Vaccine Total (Past 30 Days)",
            data:getVaccineTimeline.map((x) => x.number),
            backgroundColor:"green"
        }]
    })


    return (
        <div className='covid19Dashboard__graphContainer p-4'>
            <Row className='d-flex' lg={12}>
                <Col lg={4}>
                    <Line data={chartData} />
                </Col>
                <Col lg={4} >
                    <Line data={deathData} />
                </Col>
                <Col lg={4} >
                    <Line data={vaccineData} />
                </Col>
            </Row>
        </div>
    )
}
