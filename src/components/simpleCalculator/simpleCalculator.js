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
  
    const clearAll = () => {
        setCurrentNumber(0)
        setAsPreviousNumber(0)
        setPrevAnswer(0)
        setAnswer(null)
        setOperator(0)
        setResetState(false)
    }

    const setAnswerState = (x) => {setAnswer(x)}
    const setAsPreviousNumberState = (x) => {setAsPreviousNumber(x)}
    const setCurrentNumberState = (x) => {setCurrentNumber(x)}
    const setOperatorState = (x) => {setOperator(x)}
    const setPrevAnswerState = (x) => {setPrevAnswer(x)}
    const setResetState = (x) => { setReset(x) }


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
                    previousNumber={previousNumber}
                />

                <Operators 
                    currentNumber={currentNumber}
                    previousAnswer={previousAnswer}
                    previousNumber={previousNumber}
                    resetCalc={resetCalc} 

                    setAnswer={setAnswerState}
                    setCurrentNumber={setCurrentNumberState}
                    setReset={setResetState}
                    setOperator={setOperatorState}
                    setAsPreviousNumber={setAsPreviousNumberState}
                />
            
                <Buttons 
                    setAnswer={setAnswerState}
                    setCurrentNumber={setCurrentNumberState}
                    setAsPreviousNumber={setAsPreviousNumberState}
                    setPrevAnswer={setPrevAnswerState}
                    setReset={setResetState}
                    resetCalc={resetCalc}
                    currentNumber={currentNumber}
                    previousAnswer={previousAnswer}
                    previousNumber={previousNumber}
                    clearAll={()=>clearAll()}
                    operator={operator}     
                />

            </div>

        </div>
    )

}

export default SimpleCalculator;