export const AddDecimal = (props) =>{
    const addDecimal = (props) =>{
        // In case a user presses a decimal straight after solving
        if(props.resetCalc === true){
            props.clearAll()
            props.setCurrentNumber(0 + ".")
            return
        }

        if(props.currentNumber.toString().includes("."))return
        props.setCurrentNumber(props.currentNumber + ".")
    }


    return <button  onClick={()=>addDecimal(props)} >.</button>
}