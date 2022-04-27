import * as React from 'react'
import { useState } from 'react'

import './simpleCalculator.css'

export const SimpleCalculator = (props) =>{

    // Calculator Numbers
    const [previousNumber, setAsPreviousNumber] = useState(0)
    const [currentNumber, setCurrentNumber] = useState(0)
    const [operator, setOperator] = useState()
    const [previousAnswer, setPrevAnswer] = useState(0)

    // Display
    const [displayAnswer, setDisplay] = useState(0)
    
    const action = (x) => {
        console.log(previousNumber)
        console.log(currentNumber)
        console.log("Previous Answer:" + previousAnswer)

        // Add the previous answer to the current user input
        if(previousAnswer !== 0){
            setAsPreviousNumber(parseFloat(previousAnswer))
            console.log(currentNumber + x)
            setCurrentNumber(parseFloat(currentNumber + x))
            return
        }

        // Replaces the default 0 as soon as a number is pressed
        if(currentNumber === 0){
            setCurrentNumber(x)
            return
        }

        const combinedNumberString = currentNumber + x
        setCurrentNumber(combinedNumberString)
    }

    const getOperator = (operator) => {

        
        setOperator(operator)
        console.log(previousAnswer)
        if(previousAnswer !== 0){
            setAsPreviousNumber(parseFloat(previousAnswer))
            setCurrentNumber(0)
            return
        }

        if(previousNumber === 0){
            setAsPreviousNumber(parseFloat(currentNumber))
            setCurrentNumber(0)
            return
        }
        
    }
    
    const getAnswer = () => {       
        const answer = Calculate(previousNumber,operator,parseFloat(currentNumber))
        setDisplay(answer)
        setPrevAnswer(answer)
    }

    const Calculate = (first,operator,second) =>{
        let result = ''
        console.log(first, operator, second)
        if(operator === "add")result = first + second
        if(operator === "minus")result = first - second
        if(operator === "multiply")result = first * second
        if(operator === "divide")result = first / second
        return result
    }
    



return(
    <div className='simpleCalculator__container'>
        <h1>SimpleCalculator</h1>

        <div className='simpleCalculator_calculator'>

            <div className="simpleCalculator__display">{displayAnswer || currentNumber || 0}</div>
            <p>Previous Number: {previousNumber}</p>
            <p>Current Number: {currentNumber}</p>
            <p>Previous Answer: {previousAnswer}</p>
            <div className="simpleCalculator__options">
                <button>AC</button>
                <button>DEL</button>
            </div>

            <div className='simpleCalculator__numbers'>
                <button onClick={()=>action("1")}>1</button>
                <button onClick={()=>action("2")}>2</button>
                <button onClick={()=>action("3")}>3</button>
                <button onClick={()=>action("4")}>4</button>
                <button onClick={()=>action("5")}>5</button>
                <button onClick={()=>action("6")}>6</button>
                <button onClick={()=>action("7")}>7</button>
                <button onClick={()=>action("8")}>8</button>
                <button onClick={()=>action("9")}>9</button>
                <button onClick={()=>action("0")}>0</button>
            </div>

            <div className="simpleCalculator__operators">
                <button onClick={()=>getOperator("add")}>+</button>
                <button onClick={()=>getOperator("subtract")}>-</button>
                <button onClick={()=>getOperator("divide")}>/</button>
                <button onClick={()=>action("decimal")}>.</button>
                <button onClick={()=>getOperator("multiply")}>*</button>
            </div>
            
        
            <div className="simpleCalculator__solution">
                <button onClick={()=>getAnswer()}>=</button>
            </div>

        </div>

    </div>
)

}

export default SimpleCalculator;