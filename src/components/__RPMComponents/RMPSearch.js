import React from 'react'
import { useRef } from 'react'

export default function RMPSearch(props) {
    const userInput = useRef()
    const getInput = (e) =>{
        props.setInputState(e.target.value.toLowerCase())
    }

    
  return <input ref={userInput} onChange={(e)=>getInput(e)}/>
}
