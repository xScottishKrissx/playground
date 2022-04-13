import * as React from 'react'

import './questions.css'

import { useState } from 'react'

export const Questions = () =>{

    const [isActive, setIsActive] = useState(false)

    const data = [
        {
            question: "Q1",
            answer: "this is an answer",
        },
        {
            question: "Q2",
            answer: "this is another answer",
        },
        {
            question: "Q3",
            answer: "this is a third answer"
        },
    ]


    function toggleQuestions(questionIndex){


        if(isActive === questionIndex){
            setIsActive(false)
        }else{
            setIsActive(questionIndex)
        }
    }

    const getQuestions = data.map((x,index) => {

        return(

            <div 
                key={index} 
                id="questions__singleQuestion" 
                className={
                    `questions__singleQuestion ${index === isActive ? "showAnswer" : null }`
                } 
            >

            <div role="button" className="questions__questionTitle d-flex align-items-center justify-content-between"  onClick={()=>toggleQuestions(index)}>
                <h3>{x.question}</h3>
                <span className="material-icons add">add_circle_outline</span>
                <span className="material-icons remove">remove_circle_outline</span>
            </div>

            <div className="questions__questionAnswer">
                <p>{x.answer}</p>    
            </div>    
            
                
        </div>
        )

    })


    return(
        <div className="questions__container w-100">
            <h2>Questions</h2>
            {getQuestions}
        </div>
    )

}

// A useful thing to remember
    // document.querySelectorAll("your class")

export default Questions;