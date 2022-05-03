import React from 'react'

export default function Operators(props) {

    const getOperator = (readOperator,props) => {
      console.log(props)

      if(props.resetCalc) props.setReset(false)

      //Set the operator into state, to be used in the getAnswer function 
      props.setOperator(readOperator)
      props.setAnswer(null)
      // Set the previous number value as the last answer if it exists.
      //// This is important for allowing consecutive answers
      if(props.previousAnswer !== 0){
          props.setAsPreviousNumber(parseFloat(props.previousAnswer))
          props.setCurrentNumber(0)
          return
      }

      // If there is no previous answer then set the previous number to the current number
      if(props.previousNumber === 0){
          props.setAsPreviousNumber(parseFloat(props.currentNumber))
          props.setCurrentNumber(0)
          return
      }
      
  }

  return (

    <>

        <div className="simpleCalculator__row2">
            <div className="simpleCalculator__operators">
                <button onClick={ ()=> { getOperator("add",props) } }>+</button>
                <button onClick={ ()=> { getOperator("subtract",props) } }>-</button>
                <button onClick={ ()=> { getOperator("divide",props) } }>/</button>
                <button onClick={ ()=> { getOperator("multiply",props) } }>*</button>
            </div>
        </div>

    </>

  )
}
