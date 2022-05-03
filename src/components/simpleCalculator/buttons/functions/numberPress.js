export const numberPress = (x,props) => {
    
    
    // console.log(props.previousAnswer)
    // console.log(props.currentNumber)

    if(props.resetCalc === true){
        props.clearAll()
        props.setCurrentNumber(x)
        return
    }

    props.setAnswer(null)

    // Don't do anything if first input is 0
    //// This should be changed to add a decimal after pressing 0, so 0 => .0
    if(props.currentNumber === "0" && x === "0")return

    // Add the previous answer to the current user input
    //// This allows for consecutive answers
    if(props.previousAnswer !== 0){
        props.setAsPreviousNumber(parseFloat(props.previousAnswer))
        props.setCurrentNumber(parseFloat(props.currentNumber + x))
        return
    }

    // Replace the default 0 as soon as a number is pressed
    if(props.currentNumber === 0){
        props.setCurrentNumber(x)
        return
    }

    const combinedNumberString = props.currentNumber + x
    props.setCurrentNumber(combinedNumberString)
}