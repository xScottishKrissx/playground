import * as React from 'react'
import { useState } from 'react'

import './simpleCalculator.css'

export const SimpleCalculator = (props) =>{
    
    const [storeSum, setSum] = useState(0)
    
    const [firstNum, setFirstNumber] = useState(0)
    const [secondNum, setSecondNumber] = useState(0)
    const [operator, setOperator] = useState()

    const [displayAnswer, setDisplay] = useState(0)
    
    const action = (x) =>{
    //   console.log(x)
    //   console.log(storeSum)

      if(storeSum === 0){
          setSum(x)
          return
      }
    //   console.log(storeSum)

      const currentNumber = storeSum
      const newNumber = x
      const test = currentNumber + newNumber

      setSum(test)
      console.log(test)

    }

    const getOperator = (operator) =>{
        setOperator(operator)

        if(firstNum === 0){
            console.log("Set First Number")
            console.log(storeSum)
            setFirstNumber(parseFloat(storeSum))
            setSum(0)
            return
        }
        
    }
    
    const getAnswer = () => {
        console.log("First Number: " + firstNum)
        console.log("Second Number: " + secondNum)
        console.log(storeSum)
        // setSecondNumber(storeSum)
        

        const answer = Calculate(firstNum,operator,parseFloat(storeSum))
        console.log(answer)
        setDisplay(answer)
    }

    const Calculate = (first,operator,second) =>{
        let result = ''
        console.log(first, operator, second)
        if(operator === "add")result = first + second
        if(operator === "minus")result = first - second
        if(operator === "multiply")result = first * second
        if(operator === "divide")result = first / second
        return result
    }
    

    // console.log(storeSum)

return(
    <div className='simpleCalculator__container'>
        <h1>SimpleCalculator</h1>

        <div className='simpleCalculator_calculator'>

            <div className="simpleCalculator__display">{displayAnswer || storeSum || 0}</div>

            <div className="simpleCalculator__options">
                <button>AC</button>
                <button>DEL</button>
            </div>

            <div className='simpleCalculator__numbers'>
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
            </div>

            <div className="simpleCalculator__operators">
                <button onClick={()=>getOperator("add")}>+</button>
                <button onClick={()=>getOperator("subtract")}>-</button>
                <button onClick={()=>getOperator("divide")}>/</button>
                <button onClick={()=>action("decimal")}>.</button>
                <button onClick={()=>getOperator("multiply")}>*</button>
            </div>
            
        
            <div className="simpleCalculator__solution">
                <button onClick={()=>getAnswer()}>=</button>
            </div>

        </div>

    </div>
)

}

export default SimpleCalculator;