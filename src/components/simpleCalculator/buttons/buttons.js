import React from 'react'

import { AddDecimal } from '../functions/addDecimal'

export default function Buttons(props) {

    const action = (x,props) => {
        
        if(props.resetCalc === true){
            props.clearAll()
            props.setCurrentNumber(x)
            return
        }

        props.setAnswer(null)

        // Don't do anything if first input is 0
        //// This should be changed to add a decimal after pressing 0, so 0 => .0
        if(props.currentNumber === "0" && x === "0")return

        // Add the previous answer to the current user input
        //// This allows for consecutive answers
        if(props.previousAnswer !== 0){
            props.setAsPreviousNumber(parseFloat(props.previousAnswer))
            props.setCurrentNumber(parseFloat(props.currentNumber + x))
            return
        }

        // Replace the default 0 as soon as a number is pressed
        if(props.currentNumber === 0){
            props.setCurrentNumber(x)
            return
        }

        const combinedNumberString = props.currentNumber + x
        props.setCurrentNumber(combinedNumberString)
    }

    

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
        if(!props.resetCalc) props.setReset(true)
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
                <button onClick={ ()=> {action("1",props) } }> 1 </button>
                <button onClick={ ()=> {action("2",props) } }>2</button>
                <button onClick={ ()=> {action("3",props) } }>3</button>
                <button onClick={ ()=> {action("4",props) } }>4</button>
                <button onClick={ ()=> {action("5",props) } }>5</button>
                <button onClick={ ()=> {action("6",props) } }>6</button>
                <button onClick={ ()=> {action("7",props) } }>7</button>
                <button onClick={ ()=> {action("8",props) } }>8</button>
                <button onClick={ ()=> {action("9",props) } }>9</button>
                <button onClick={ ()=> {action("0",props) } }>0</button>
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
