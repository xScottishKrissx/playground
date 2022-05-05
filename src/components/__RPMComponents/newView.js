import React, { useRef, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ColourFlipper from '../colourFlipper/colourFlipper'
import Counter from '../counter/counter'
import Navbar from '../navBar/navbar'
import IntroductionMessage from '../introMessage/introMessage'


export default function NewView() {

    const [inputValue, setInput] = useState("")

    const components = [
        {
          name:"Counter",
          componentName:Counter 
        },
        {
          name:"Colour Flipper",
          componentName:ColourFlipper 
        }
      ]

    const setInputState = (x) =>{setInput(x)}

    const filterComps = components.filter(x => x.name.toLowerCase().includes(inputValue) )
    const mapComponents = filterComps.map((x,index) => {
        return(
            <Col key={index} sm={12} lg={6} className="p-0">  <x.componentName /> </Col>
        )
    })

  return (
    <div className='d-flex flex-column align-items-center'>

        <Navbar setInputState={setInputState}/>
        
        {/* Display Content */}
        {/* This replaces all of the individual component calls in app.js */}

        <Container className='mt-5 mb-5'>
            
            <Row className='mb-3'> 
                <Col sm={12} className="intro"> <IntroductionMessage /> </Col> 
            </Row>
            
            <Row fluid="true"> {mapComponents} </Row>

        </Container>
        

    </div>
  )
}
