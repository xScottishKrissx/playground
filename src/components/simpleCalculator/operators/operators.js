import React from 'react'

export default function Operators(props) {
  return (

    <>

        <div className="simpleCalculator__row2">
            <div className="simpleCalculator__operators">
                <button onClick={ ()=> { props.getOperator("add") } }>+</button>
                <button onClick={ ()=> { props.getOperator("subtract") } }>-</button>
                <button onClick={ ()=> { props.getOperator("divide") } }>/</button>
                <button onClick={ ()=> { props.getOperator("multiply") } }>*</button>
            </div>
        </div>

    </>

  )
}
