import * as React from 'react'
import { useState } from 'react'

import './simpleCalculator.css'

// This is my first proper crack at a calculator so please forgive me if this is a total mess. I'm focused on getting it to work and understanding how it works at the same time.

export const SimpleCalculator = (props) =>{

    // Calculator Numbers
    // This is number that needs somedisplayOperator to be added to it
    const [previousNumber, setAsPreviousNumber] = useState(0)
    // This is the most recent user input, will be added to the previous number or the previous answer
    const [currentNumber, setCurrentNumber] = useState(0)
    // The operator as set by the user
    const [operator, setOperator] = useState()
    // This is sum of the previous number and current number which i use to add to the current number on consecutive equations
    const [previousAnswer, setPrevAnswer] = useState(0)

    // Display
    const [currentAnswer, setAnswer] = useState(null)
    
    const action = (x) => {
        
        setAnswer(null)
        showAnswer()
        // console.log(previousAnswer)
        // console.log(currentNumber)
        // console.log(previousNumber)
        
        // Don't do anydisplayOperator if first input is 0
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

    const getOperator = (operator) => {
        //Set the operator into state, to be used in the getAnswer function 
        setOperator(operator)

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
    
    const getAnswer = () => {       
        const answer = Calculate(previousNumber,operator,parseFloat(currentNumber))
        
        // Display the answer on page
        setAnswer(answer)
        // Set the answer to the current equation as the previous answer, to be used in consecutive equations
        setPrevAnswer(answer)
    }

    const Calculate = (first,operator,second) =>{
        console.log(first, operator, second)
        if(operator === "add") return first + second
        if(operator === "subtract")return first - second
        if(operator === "multiply")return first * second
        if(operator === "divide")return first / second
    }
    

    const clearAll = () => {
        // console.log("Clear All")
        setCurrentNumber(0)
        setAsPreviousNumber(0)
        setPrevAnswer(0)
        setAnswer(null)
        setOperator(0)
    }

    const clearEntry = () => {
        // console.log("Clear Entry")
        setCurrentNumber(0)
    }

    const showAnswer = () =>{
        let displayOperator;
        if(operator === "add") displayOperator = "+"
        if(operator === "subtract") displayOperator = "-"
        if(operator === "divide") displayOperator = "/"
        if(operator === "multiply") displayOperator = "*"
        
        let formatCurrentNumber = currentNumber === 0 ? "" : currentNumber
        // console.log(formatCurrentNumber)

        let formatAnswer = currentAnswer === null ? "" : " = " + currentAnswer
        let showWork = "" + previousNumber + " " + displayOperator + " " + formatCurrentNumber + formatAnswer;

        // console.log(currentAnswer)
        return showWork
    }


return(
    <div className='simpleCalculator__container'>
        {/* <h1>SimpleCalculator</h1> */}

        <div className='simpleCalculator_calculator'>

            
            
            <div className="simpleCalculator__row1">
                {/* <div className="showAnswer">{operator ? showAnswer() :<p>Working</p>}</div> */}
                <div className="simpleCalculator__display">

                {operator ? showAnswer() : currentNumber || 0}
                    {/* {currentAnswer || currentNumber || 0} */}
                </div>
            </div>

            <div className="simpleCalculator__row2">
                <div className="simpleCalculator__operators">
                    <button onClick={()=>getOperator("add")}>+</button>
                    <button onClick={()=>getOperator("subtract")}>-</button>
                    <button onClick={()=>getOperator("divide")}>/</button>
                    <button onClick={()=>getOperator("multiply")}>*</button>
                </div>
            </div>

            <div className="simpleCalculator__row3">

                <div className='simpleCalculator__numbers'>
                    <button id="solutionButton" onClick={()=>getAnswer()}>=</button>
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
                    {/* There be monsters */}
                    <button onClick={()=>action("decimal")}>.</button>
                    {/* <button onClick={()=>clearEntry()}>CE</button> */}
                    <button id="clearAllButton" onClick={()=>clearAll()}>AC</button>
                    
                </div>

                {/* <div className="simpleCalculator__solution">
                    <button onClick={()=>getAnswer()}>=</button>
                </div> */}
            </div>
           

                

   



                


           


    






            
        


        </div>

            {/* <p>Previous Number: {previousNumber}</p>
            <p>Current Number: {currentNumber}</p>
            <p>Previous Answer: {previousAnswer}</p> */}
    </div>
)

}

export default SimpleCalculator;