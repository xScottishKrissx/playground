import * as React from 'react'
import { useState,useRef } from 'react'

import './simpleTodo.css'

export const SimpleTodo = (props) =>{

    const [items, setItem] = useState(false)
    const formInput = useRef(null)

    function collectUserInput(){
        // Grab the value in the box
        const value = formInput.current.value

        // Create / get the current items array
        let itemArray = items || []
        // add new value to the array
        itemArray.push(value)

        console.log(itemArray)
        // format the item array in a readable format


        // save the formatted items in state
        setItem(itemArray)
    }

    // Problem - Not updating on button click
    
return(
    <div className="simpleTodo__container">
        <h1>Simple To-Do</h1>

        <div className="simpleTodo__formContainer">
            <form className="simpleTodo__form">
                <label htmlFor="itemEntry"></label>
                <input ref={formInput} type="text" name="itemEntry" />
            </form>
            <button onClick={() => collectUserInput()}>add</button>
            {/* <button>edit</button> */}

            
        </div>

        <div className="simpleTodo__list">
            {items}
        </div>
    </div>
)

}

export default SimpleTodo;