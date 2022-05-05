import React from 'react'

import './RMPComponentView.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { components } from '../utilities/componentList'
import RMPSearchComponents from '../RMPSearchComponents/RMPSearchComponents'

export default function RMPComponentView(props) {
    
    const filterComps = components.filter(x => 
      x.name.toLowerCase().includes(props.inputValue) ||
      x.tags.toLowerCase().includes(props.inputValue)
    )
    const mapComponents = filterComps.map((x,index) => {
      return(
          <Col key={index} sm={12} lg={6} className={x.name + "__componentContainer"}>  <x.componentName /> </Col>
      )
    })
    
  return (
          <>

            <RMPSearchComponents 
              setInputState={props.setInputState} 
              componentsLength={components.length} 
              mapComponentsLength={mapComponents.length} 
            />
 
            <Row fluid="true"> {mapComponents} </Row>

          </>
      
  )
}
