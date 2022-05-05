import React, { useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Navbar from '../navBar/navbar'
import IntroductionMessage from '../introMessage/introMessage'
import RMPComponentView from './RMPComponentView/RMPComponentView'
import Footer from '../footer/footer'

import './RMPView.css'

export default function NewView() {

    const [inputValue, setInput] = useState("")


    const setInputState = (x) =>{setInput(x)}




  return (
    <div className='d-flex flex-column align-items-center'>

        <Navbar setInputState={setInputState}/>
        
        {/* Display Content */}
        {/* This replaces all of the individual component calls in app.js */}

        <Container className=' mt-5 mb-5'>
            
            <Row className='mb-3'> 
                <Col sm={12} className="intro"> <IntroductionMessage /> </Col> 
            </Row>
            
            {/* Component View Component */}
            <RMPComponentView inputValue={inputValue} />
            
        <Footer />
        </Container>
        

    </div>
  )
}
