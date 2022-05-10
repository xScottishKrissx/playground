import React from 'react'

import './RMPComponentView.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { components } from '../utilities/componentList'
import RMPSearchComponents from '../RMPSearchComponents/RMPSearchComponents'
import GithubLink from './RMPComonentItemOverlayButtons/githubLink'
import TaskInformation from './RMPComonentItemOverlayButtons/taskInformation'

export default function RMPComponentView(props) {

   

    const filterComps = components.filter(x => 
      x.name.toLowerCase().includes(props.inputValue) ||
      x.tags.toLowerCase().includes(props.inputValue)
    )
    const mapComponents = filterComps.map((x,index) => {

      return(
          <Col key={index} sm={12} lg={6} className={x.name + "__componentContainer position-relative "}>  
            <x.componentName /> 

            <div className='componentItemButtonsContainer d-flex w-100 top-0 left-0 position-absolute'>
              <GithubLink githubUrl={x.github} iconColour={x.iconColour}/>
              <TaskInformation  name={x.name} information={x.information} iconColour={x.iconColour} tags={x.tags}/>
            </div>



          </Col>
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
