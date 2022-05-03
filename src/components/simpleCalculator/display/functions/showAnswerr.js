export default function showAnswer(props) {
        let displayOperator;
        if(props.operator === "add") displayOperator = "+"
        if(props.operator === "subtract") displayOperator = "-"
        if(props.operator === "divide") displayOperator = "/"
        if(props.operator === "multiply") displayOperator = "*"

        let formatCurrentNumber = props.currentNumber === 0 ? "" : props.currentNumber
        let formatAnswer = props.currentAnswer === null ? "" : " = " + props.currentAnswer

        let showWork = props.previousNumber + " " + displayOperator + " " + formatCurrentNumber + formatAnswer;

        return showWork    
}

