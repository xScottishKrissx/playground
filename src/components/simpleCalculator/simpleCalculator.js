import * as React from 'react'
import { useState } from 'react'

import Buttons from './buttons/buttons'
import CalculatorDisplay from './display/calculatorDisplay'
import Operators from './operators/operators'

// import { clearAllFunc } from './functions/clearAll'

import './simpleCalculator.css'

// This is my first proper crack at a calculator so please forgive me if this is a total mess. I'm focused on getting it to work and understanding how it works at the same time.

export const SimpleCalculator = (props) =>{

    // Calculator Numbers
    // This is number that needs something to be added to it
    const [previousNumber, setAsPreviousNumber] = useState(0)
    // This is the most recent user input, will be added to the previous number or the previous answer
    const [currentNumber, setCurrentNumber] = useState(0)
    // The operator as set by the user
    const [operator, setOperator] = useState()
    // This is sum of the previous number and current number which i use to add to the current number on consecutive equations
    const [previousAnswer, setPrevAnswer] = useState(0)

    // A detector to reset the calculator if the user selects a number without first selecting an operator
    const [resetCalc, setReset] = useState(false)

    // Display the final answer
    const [currentAnswer, setAnswer] = useState(null)

    const action = (x) => {

        if(resetCalc === true){
            clearAll()
            setCurrentNumber(x)
            return
        }

        setAnswer(null)
        // showAnswer()

        
        // Don't do anything if first input is 0
        //// This should be changed to add a decimal after pressing 0, so 0 => .0
        if(currentNumber === "0" && x === "0")return

        // Add the previous answer to the current user input
        //// This allows for consecutive answers
        if(previousAnswer !== 0){
            setAsPreviousNumber(parseFloat(previousAnswer))
            setCurrentNumber(parseFloat(currentNumber + x))
            return
        }

        // Replace the default 0 as soon as a number is pressed
        if(currentNumber === 0){
            setCurrentNumber(x)
            return
        }

        const combinedNumberString = currentNumber + x
        setCurrentNumber(combinedNumberString)
    }

    
    const getOperator = (readOperator) => {
        if(resetCalc) setReset(false)

        //Set the operator into state, to be used in the getAnswer function 
        setOperator(readOperator)
        setAnswer(null)
        // Set the previous number value as the last answer if it exists.
        //// This is important for allowing consecutive answers
        if(previousAnswer !== 0){
            setAsPreviousNumber(parseFloat(previousAnswer))
            setCurrentNumber(0)
            return
        }

        // If there is no previous answer then set the previous number to the current number
        if(previousNumber === 0){
            setAsPreviousNumber(parseFloat(currentNumber))
            setCurrentNumber(0)
            return
        }
        
    }
    
    // const getAnswer = () => {      

    //     // Prevents users from solving 1 = 
    //     if(currentNumber && !operator) return

    //     // Prevents users from solving "1 + =" etc 
    //     if(currentNumber === 0 && operator )return
        
    //     const answer = Calculate(previousNumber,operator,parseFloat(currentNumber))
        
    //     // Display the answer on page
    //     setAnswer(answer)
    //     // Set the answer to the current equation as the previous answer, to be used in consecutive equations
    //     setPrevAnswer(answer)
    //     setReset(true)
    // }

    // const Calculate = (first,operator,second) =>{
    //     console.log(first, operator, second)
    //     if(operator === "add") return first + second
    //     if(operator === "subtract")return first - second
    //     if(operator === "multiply")return first * second
    //     if(operator === "divide")return first / second
    // }
    

    const clearAll = () => {
        setCurrentNumber(0)
        setAsPreviousNumber(0)
        setPrevAnswer(0)
        setAnswer(null)
        setOperator(0)
        setReset(false)
    }

    // const addDecimal = () =>{
    //     // In case a user presses a decimal straight after solving
    //     if(resetCalc === true){
    //         clearAll()
    //         setCurrentNumber(0 + ".")
    //         return
    //     }

    //     if(currentNumber.toString().includes("."))return
    //     setCurrentNumber(currentNumber + ".")
    // }

    // const showAnswer = () =>{
    //     let displayOperator;
    //     if(operator === "add") displayOperator = "+"
    //     if(operator === "subtract") displayOperator = "-"
    //     if(operator === "divide") displayOperator = "/"
    //     if(operator === "multiply") displayOperator = "*"

    //     let formatCurrentNumber = currentNumber === 0 ? "" : currentNumber
    //     let formatAnswer = currentAnswer === null ? "" : " = " + currentAnswer

    //     let showWork = previousNumber + " " + displayOperator + " " + formatCurrentNumber + formatAnswer;
    //     return showWork
    // }

    const setCurrentNumberState = (x) => {setCurrentNumber(x)}
    const setAnswerState = (x) => {setAnswer(x)}
    const setPrevAnswerState = (x) => {setPrevAnswer(x)}
    const setResetState = (x) => {setResetState(x)}


return(
    <div className='simpleCalculator__container'>

        <div className="simpleCalculator__header">
            <h2 className=''>*Simple Calculator</h2>
            <p>*a very</p>
        </div>

        <div className="randomShape"></div>
        
        <div className='simpleCalculator_calculator'>
            <CalculatorDisplay 
                operator={operator} 
                currentNumber={currentNumber} 
                currentAnswer={currentAnswer} 
                // showAnswer={showAnswer()} 
                previousNumber={previousNumber}
                 />
            <Operators getOperator={getOperator} />



            
            <Buttons 
                // getAnswer={()=>getAnswer()} 
                setAnswer={setAnswerState}
                setPrevAnswer={setPrevAnswerState}
                setReset={setResetState}
                action={action} 
                // addDecimal={()=>addDecimal()} 
                // addDecimal={addDecimal}
                resetCalc={resetCalc}
                currentNumber={currentNumber}
                previousNumber={previousNumber}
                setCurrentNumber={setCurrentNumberState}
                clearAll={()=>clearAll()}
                operator={operator} 
                
                />
        </div>

    </div>
)

}

export default SimpleCalculator;