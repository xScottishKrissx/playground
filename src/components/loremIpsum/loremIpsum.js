import { text } from 'dom-helpers'
import { useState } from 'react'
import * as React from 'react'

import './loremIpsum.css'

import * as textFile from './text.js'

export const LoremIpsum = (props) =>{

    const [textArray, setTextArray] = useState(false)
    
    const text = textFile.text

    
    function generateText(x){

        let textArray = []

        for (let i = 0; i < x; i++) {
            let r = randomNumber(text.length)
            const getText = text[r]
            textArray.push(getText)
        }
        
        setTextArray(textArray)
    }

    function randomNumber(arrayLength){
        return Math.floor((Math.random() * arrayLength))
    }

console.log(textArray)

const mapText = textArray.map(x=>{
    return(
        <div>
            <p>{x}</p>
        </div>
    )
})
return(
    <div>
        <h2>LoremIpsum</h2>

        <button onClick={()=>generateText(3)}>submit</button>

        {textArray ? mapText : null}
    </div>
)

}

export default LoremIpsum;