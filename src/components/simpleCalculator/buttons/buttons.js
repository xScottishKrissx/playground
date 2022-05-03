import React from 'react'

import { AddDecimal } from '../functions/addDecimal'

export default function Buttons(props) {


    const getAnswer = (props) => {   
        console.log(props.operator)   

        // Prevents users from solving 1 = 
        if(props.currentNumber && !props.operator) return

        // Prevents users from solving "1 + =" etc 
        if(props.currentNumber === 0 && props.operator )return
        
        const answer = Calculate(props.previousNumber,props.operator,parseFloat(props.currentNumber))
        
        // Display the answer on page
        props.setAnswer(answer)
        // Set the answer to the current equation as the previous answer, to be used in consecutive equations
        props.setPrevAnswer(answer)
        
        // Fixes maximum call stack error
        if(!props.setReset) props.setReset(true)
    }

    const Calculate = (first,operator,second) =>{
        console.log(first, operator, second)
        if(operator === "add") return first + second
        if(operator === "subtract")return first - second
        if(operator === "multiply")return first * second
        if(operator === "divide")return first / second
    }


  return (
      <>
        <div className="simpleCalculator__row3">
            <div className='simpleCalculator__numbers'>
                <button id="solutionButton" onClick={()=>getAnswer(props)}>=</button>
                <button onClick={ ()=> {props.action("1") } }> 1 </button>
                <button onClick={ ()=> {props.action("2") } }>2</button>
                <button onClick={ ()=> {props.action("3") } }>3</button>
                <button onClick={ ()=> {props.action("4") } }>4</button>
                <button onClick={ ()=> {props.action("5") } }>5</button>
                <button onClick={ ()=> {props.action("6") } }>6</button>
                <button onClick={ ()=> {props.action("7") } }>7</button>
                <button onClick={ ()=> {props.action("8") } }>8</button>
                <button onClick={ ()=> {props.action("9") } }>9</button>
                <button onClick={ ()=> {props.action("0") } }>0</button>
                {/* <button onClick={props.addDecimal}>.</button> */}
                <AddDecimal 
                    resetCalc={props.resetCalc}
                    clearAll={props.clearAll}
                    currentNumber={props.currentNumber}
                    setCurrentNumber={props.setCurrentNumber}
                />
                <button id="clearAllButton" onClick={props.clearAll}>AC</button> 
            </div>
        </div>
    </>
  )
}
