import * as React from 'react'
import { useState,useRef,useEffect } from 'react'

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


import './simpleTodo.css'

export const SimpleTodoFunctional = () =>{

    // Reset Local Storage Manually
    // localStorage.clear()


    const getLocalStorage = JSON.parse(localStorage.getItem("items"))
    // console.log(getLocalStorage)

    const [items, setItem] = useState(getLocalStorage || [])
    const formInput = useRef(null)

    function handleClick(){

    // Grab the value of the input box using the ref and add it to a new or existing array of items
        const value = formInput.current.value        
        let itemsArray = items || [] 
        itemsArray.push(value)  

    // Set the new state which will update the page.
        setItem(items => ([...items]))    

    // Save the items array to local state
        localStorage.setItem("items",JSON.stringify(items))
        // console.log(items)

    // Clear the input after adding a new item
        formInput.current.value = null

    }

    // Display the items array in a readable format.
    const mapItems = items.map((x,index) => {
        return(
            <div key={index} className="simpleTodo__singleItem d-flex">
                <p className="w-75">{x}</p>

                <div  className="simpleTodo__singleItemButtons w-25">
                    <span className="material-icons simpleTodo__editButton">edit</span>
                    <span className="material-icons simpleTodo__deleteButton">delete</span>
                </div>

                
            </div>
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
            <button onClick={()=>handleClick()}><span className="material-icons">add</span></button>
            {/* <button>edit</button> */}

            
        </div>

        <div className="simpleTodo__list">

            {mapItems}

        </div>
    </div>
)

}

export default SimpleTodoFunctional;