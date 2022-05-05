import React from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { components } from '../utilities/componentList'

export default function RMPComponentView(props) {

    const filterComps = components.filter(x => x.name.toLowerCase().includes(props.inputValue) )
    const mapComponents = filterComps.map((x,index) => {
    return(
        <Col key={index} sm={12} lg={6}>  <x.componentName /> </Col>
    )
    })

  return (
    <Row fluid="true"> {mapComponents} </Row>
  )
}
