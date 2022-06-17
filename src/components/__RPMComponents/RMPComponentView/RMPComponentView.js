import React, {useState} from 'react'

import './RMPComponentView.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import { components } from '../utilities/componentList'
import RMPSearchComponents from '../RMPSearchComponents/RMPSearchComponents'
import GithubLink from './RMPComponentItemOverlayButtons/githubLink'
import TaskInformation from './RMPComponentItemOverlayButtons/taskInformation'
import SetVisibilityButton from './RMPComponentItemOverlayButtons/setVisibilityButton'

export default function RMPComponentView(props) {

    const filterComps = components.filter(x => 
      x.name.toLowerCase().includes(props.inputValue) ||
      x.tags.toLowerCase().includes(props.inputValue)
    )

    // Display the number of hidden projects
    const [hidden, setHidden] = useState(0)
    const unHideAll = () =>{
      document.querySelectorAll('.hideElement').forEach(x => x.classList.remove("hideElement"))
      setHidden(0)
    }





    const mapComponents = filterComps.map((x,index) => {
      let componentSize = x.size === "wide" ? 12 : 6
      return(
          <Col key={index} sm={12} lg={componentSize} className={x.name + "__componentContainer position-relative "}>  
            <x.componentName /> 

            <div className='componentItemButtonsContainer d-flex w-100 top-0 left-0 position-absolute'>
              <GithubLink githubUrl={x.github} iconColour={x.iconColour}/>
              <TaskInformation  name={x.name} information={x.information} iconColour={x.iconColour} tags={x.tags}/>
              <SetVisibilityButton iconColour={x.iconColour} numberHidden={setHidden}/>
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



            {hidden ? 
              
              <div onClick={unHideAll} className='hiddenProjectIndication text-muted'>
                <p>{hidden} project hidden -- <span >Restore All</span> </p> 
              </div>
              
              : null} 


            <Row fluid="true"> {mapComponents} </Row>

          </>
      
  )
}
