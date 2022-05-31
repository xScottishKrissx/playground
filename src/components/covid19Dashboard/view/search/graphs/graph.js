import React from 'react'
import { useState } from 'react'
import { Line } from 'react-chartjs-2'
import {Row, Col} from 'react-bootstrap'

export default function Graph(props) {

    const {data} = props
    const getTimelineData = data[0].timeline
    
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


    return (
        <div>
            Graphs
            <Row className='d-flex' lg={12}>
                <Col lg={6}>
                    <Line data={chartData} />
                </Col>
                <Col lg={6} >
                    <Line data={deathData} />
                </Col>
            </Row>
            {/* {mapTimelineData} */}
        </div>
    )
}
