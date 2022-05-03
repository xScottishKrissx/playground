import React from 'react'

import { AddDecimal } from './functions/addDecimal'
import { getAnswer } from './functions/getAnswer'
import { numberPress } from './functions/numberPress'

export default function Buttons(props) {

  return (
      <>
        <div className="simpleCalculator__row3">
            <div className='simpleCalculator__numbers'>

                <button id="solutionButton" onClick={()=>getAnswer(props)}>=</button>

                <button onClick={ ()=> {numberPress("1",props) } }> 1 </button>
                <button onClick={ ()=> {numberPress("2",props) } }>2</button>
                <button onClick={ ()=> {numberPress("3",props) } }>3</button>
                <button onClick={ ()=> {numberPress("4",props) } }>4</button>
                <button onClick={ ()=> {numberPress("5",props) } }>5</button>
                <button onClick={ ()=> {numberPress("6",props) } }>6</button>
                <button onClick={ ()=> {numberPress("7",props) } }>7</button>
                <button onClick={ ()=> {numberPress("8",props) } }>8</button>
                <button onClick={ ()=> {numberPress("9",props) } }>9</button>
                <button onClick={ ()=> {numberPress("0",props) } }>0</button>

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
