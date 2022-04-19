import { useState,useEffect } from 'react'
import * as React from 'react'

import './loremIpsum.css'
import * as textFile from './text.js'

export const LoremIpsum = (props) =>{


    useEffect(()=>{
        generateText(userInput)
    },[])
    
    const [storeTextArray, setTextArray] = useState(false)
    const [userInput, setUserInput] = useState(1)
    const [showErrorMsg,setErrorMsgStatus] = useState(false)
    
    const text = textFile.text
    function generateText(x){

        let textArray = []
        for (let i = 0; i < x; i++) {
            let r = randomNumber(text.length)
            const getText = text[r]
            textArray.push(getText)
        }

        const mapText = textArray.map((x,index)=>{
            return(
                <div className="loremIpsum__singleParagraph" key={index}>
                    <p>{x}</p>
                </div>
            )
        })

        setTextArray(mapText)
    }

    function randomNumber(arrayLength){
        return Math.floor((Math.random() * arrayLength))
    }

    function collectUserInput(input){

        const convertValue = parseInt(input.target.value)

        if(Number.isInteger(convertValue) && convertValue > 0 && convertValue <= 100){
            setUserInput(convertValue)
            setErrorMsgStatus(false)
        }else{
            setUserInput(0)
            setErrorMsgStatus(true)
        }       
    }
    
        return(
            <div className="loremIpsum__container">
                <h2 className="text-center">Lorem Ipsum Generator</h2>

                <div className="loremIpsum__formContainer d-flex pt-3">
                    <form className="loremIpsum__form" onSubmit={e => e.preventDefault()}>
                        <label  htmlFor="number">Required Number of Paragraphs</label>
                        <input name="number" type="text" onInput={(e) => collectUserInput(e)} placeholder="1"/>
                    </form>

                    <button onClick={()=>generateText(userInput)}>Generate</button>
                </div>


                <div className="loremIpsum__paragraphsContainer pt-3">
                    {storeTextArray ? storeTextArray : null}
                </div>

                {showErrorMsg ? <div className="loremIpsum__errorMessage">Enter a valid number please(1 to 100)</div> : null }
                
                
            </div>
        )

}

export default LoremIpsum;