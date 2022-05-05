import React from 'react'

import './RMPSearchComponents.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import RMPSearch from '../utilities/RMPSearch'

export default function RMPSearchComponents(props) {
    
    let arrayLength = props.mapComponentsLength === props.componentsLength  ? 
      props.mapComponentsLength + "/" + props.componentsLength 
      : 
      props.mapComponentsLength + "/" + props.componentsLength


    let showNumberOfResults = arrayLength === 0 ? "0 Results" : arrayLength


  return (
    <>
        <Row className='mb-3'>
            <Col lg={10} className='RMPComponentView__search'><RMPSearch setInputState={props.setInputState}/></Col>
            <Col className='RMPComponentView__resultNumber'>{showNumberOfResults}</Col>
        </Row>
    </>
  )
}
