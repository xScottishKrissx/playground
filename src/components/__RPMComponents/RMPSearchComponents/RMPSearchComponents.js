import React, { useEffect } from 'react'
import { useState,useRef } from 'react'
import './RMPSearchComponents.css'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import RMPSearch from '../utilities/RMPSearch'

export default function RMPSearchComponents(props) {

    const [value,setValue] = useState(props.componentsLength)
    const resultNum = useRef()
    
    let arrayLength = props.mapComponentsLength === props.componentsLength  ? 
      props.mapComponentsLength + "/" + props.componentsLength 
      : 
      props.mapComponentsLength + "/" + props.componentsLength


    let showNumberOfResults = arrayLength === 0 ? "0 Results" : arrayLength

    useEffect(()=>{
      if(value !== props.mapComponentsLength){
        setValue(props.mapComponentsLength)
        resultNum.current.classList.remove("resultAnimation")
      }else{
        resultNum.current.classList.add("resultAnimation")
      }
    },[value,props.mapComponentsLength])


  return (
    <>
        <Row className='mb-3 RMPSearchWrapper'>
            <Col xs={10} className='RMPComponentView__search'><RMPSearch setInputState={props.setInputState}/></Col>
            <Col xs={2} ref={resultNum} className='RMPComponentView__resultNumber'>{showNumberOfResults}</Col>
        </Row>
    </>
  )
}
