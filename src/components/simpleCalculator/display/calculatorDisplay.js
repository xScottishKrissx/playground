import React from 'react'

export default function CalculatorDisplay(props) {

    
  return (

    <>
        <div className="simpleCalculator__row1">
            <div className="simpleCalculator__display">
                {props.operator ? props.showAnswer : props.currentNumber || 0}
            </div>
        </div>
    </>
  )
}
