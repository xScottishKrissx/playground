export const getAnswer = (props) => {   

    // Prevents users from solving 1 = 
    if(props.currentNumber && !props.operator) return

    // Prevents users from solving "1 + =" etc 
    if(props.currentNumber === 0 && props.operator )return
    
    const answer = Calculate(props.previousNumber,props.operator,parseFloat(props.currentNumber))
    
    // Display the answer on page
    props.setAnswer(answer)
    // Set the answer to the current equation as the previous answer, to be used in consecutive equations
    props.setPrevAnswer(answer)

    // Fixes maximum call stack error
    if(!props.resetCalc) props.setReset(true)
}

const Calculate = (first,operator,second) =>{
    // console.log(first, operator, second)
    if(operator === "add") return first + second
    if(operator === "subtract")return first - second
    if(operator === "multiply")return first * second
    if(operator === "divide")return first / second
}