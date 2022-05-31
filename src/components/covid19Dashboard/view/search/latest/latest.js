import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default function Latest(props) {
    const {data,country} = props
    console.log(country)

    const filterCountry = data.filter(x => x.country === country)
    console.log(filterCountry[0])
    const getCountry = filterCountry[0]
    return (
        <div>
            Latest
            {getCountry === undefined ? <p>Nothing</p> 
            :
            <>
            <Row>
                <Col>{getCountry.country}</Col>
                <Col>Cases: {getCountry.cases}</Col>
                <Col>Cases Per Million: {getCountry.casesPerOneMillion}</Col>
            </Row>
            <Row>
                <Col>{getCountry.country}</Col>
                <Col>Deaths: {getCountry.deaths}</Col>
                <Col>Deaths Per Million: {getCountry.deathsPerOneMillion}</Col>
            </Row>
            </>
            }
        </div>
    )
}
