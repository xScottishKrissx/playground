export const getOperator = (readOperator,props) => {
    // console.log(props.previousAnswer)
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