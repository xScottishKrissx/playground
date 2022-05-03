import React from 'react'

import { AddDecimal } from '../functions/addDecimal'

export default function Buttons(props) {
  return (
      <>
        <div className="simpleCalculator__row3">
            <div className='simpleCalculator__numbers'>
                <button id="solutionButton" onClick={props.getAnswer}>=</button>
                <button onClick={ ()=> {props.action("1") } }> 1 </button>
                <button onClick={ ()=> {props.action("2") } }>2</button>
                <button onClick={ ()=> {props.action("3") } }>3</button>
                <button onClick={ ()=> {props.action("4") } }>4</button>
                <button onClick={ ()=> {props.action("5") } }>5</button>
                <button onClick={ ()=> {props.action("6") } }>6</button>
                <button onClick={ ()=> {props.action("7") } }>7</button>
                <button onClick={ ()=> {props.action("8") } }>8</button>
                <button onClick={ ()=> {props.action("9") } }>9</button>
                <button onClick={ ()=> {props.action("0") } }>0</button>
                {/* <button onClick={props.addDecimal}>.</button> */}
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
