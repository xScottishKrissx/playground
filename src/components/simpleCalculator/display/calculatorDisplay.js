import React from 'react'

import showAnswer from '../functions/showAnswerr';

export default function CalculatorDisplay(props) {

  return (

    <>
        <div className="simpleCalculator__row1">
            <div className="simpleCalculator__display">
                {props.operator ? showAnswer(props) : props.currentNumber || 0}
            </div>
        </div>
    </>
  )
}
