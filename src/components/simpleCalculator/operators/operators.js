import React from 'react'
import { getOperator } from './functions/getOperator'

export default function Operators(props) {
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
