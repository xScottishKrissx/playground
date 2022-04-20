import * as React from 'react'
import { useState,useRef,useEffect } from 'react'

import './simpleTodo.css'

export const SimpleTodoFunctional = () =>{

    const [items, setItem] = useState([])
    const formInput = useRef(null)

    function handleClick(){

        const value = formInput.current.value
        console.log(value)
        
        let itemsArray = items || [] 
        itemsArray.push(value)  
        setItem(items => ([...items]))

    
        console.log(items)

    }

    const mapItems = items.map((x,index) => {
        return(
            <p key={index}>{x}</p>
        )
    })

return(

    <div className="simpleTodo__container">
        <h1>Simple To-Do - Functional</h1>

        <div className="simpleTodo__formContainer">
            <form className="simpleTodo__form">
                <label htmlFor="itemEntry"></label>
                <input ref={formInput} type="text" name="itemEntry" />
            </form>
            <button onClick={()=>handleClick()}>add</button>
            {/* <button>edit</button> */}

            
        </div>

        <div className="simpleTodo__list">

            {mapItems}

        </div>
    </div>
)

}

export default SimpleTodoFunctional;