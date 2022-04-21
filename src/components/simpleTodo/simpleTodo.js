import * as React from 'react'
import { useState,useRef,useEffect } from 'react'

import './simpleTodo.css'

export const SimpleTodoFunctional = () =>{

    // Reset Local Storage Manually
    // localStorage.clear()

// Local Storage
    const getLocalStorage = JSON.parse(localStorage.getItem("items"))

// State
    const [items, setItem] = useState(getLocalStorage || [])

    const [edit, setEditState] = useState({
        editMode:false,
        editIndex:false
    })
// References
    const formInput = useRef(null)

// Add Item
    function addItem(){
        console.log("Add New Item");
        toggleEditMode(false)
        const value = formInput.current.value     
        if(value.length > 1){
            let itemsArray = items || [] 
            itemsArray.push(value)  
            setItem(items => ([...items]))    
            setLocalStorage(items)
            setFormValue(null)
        }return;
    }
// Edit
    function startEdit(index){
        console.log("Start Edit");
        const edit = getLocalStorage[index]
        setFormValue(edit)
        setEditState({editMode:true,editIndex:index})
    }
    
    const cancelEdit = () => {
        setFormValue(null)
        toggleEditMode(false)
    }
    function submitEdit(){        

        const newValue = formInput.current.value
        if(newValue.length < 1) {
            toggleEditMode(false)
            alert("Error: Field cannot be empty")
            return
        }

        const valueToChange = edit.editIndex
        getLocalStorage.splice(valueToChange,1,newValue)

        setItem(getLocalStorage) 
        toggleEditMode(false)
        setLocalStorage(getLocalStorage)
        setFormValue(null)

    }



// Delete
    function handleDelete(itemIndex, numToDelete){
        getLocalStorage.splice(itemIndex,numToDelete)
        
        setFormValue(null)
        setItem(getLocalStorage) 
        toggleEditMode(false)
        setLocalStorage(getLocalStorage)
    }



    const setLocalStorage = (toBeStored) =>  localStorage.setItem("items",JSON.stringify(toBeStored))
    const toggleEditMode = (setEditModeTo) => setEditState({editMode:setEditModeTo}) 
    const setFormValue = (setFormValueTo) => formInput.current.value = setFormValueTo


    // Display the items array in a readable format.
    const mapItems = items.map((x,index) => {
        return(
            <div key={index} className="simpleTodo__singleItem d-flex">

                <p className="w-75">{x}</p>

                <div  className="simpleTodo__singleItemButtons w-25">
                    <span role="button" onClick={()=>startEdit(index)} className="material-icons simpleTodo__editButton">edit</span>
                    <span role="button" onClick={()=>handleDelete(index, 1)} className="material-icons simpleTodo__deleteButton">delete</span>
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
            
            {!edit.editMode ? 
                <button onClick={()=>addItem()}><span className="material-icons">add</span></button>
                : 
                <button onClick={()=>submitEdit()}><span className="material-icons">edit</span></button>
            }

        </div>

        <div className="simpleTodo__list"> 
            {mapItems} - 
            <button onClick={()=>handleDelete('',items.length)}>Delete All</button>
            <button onClick={cancelEdit}>Cancel Edit</button>
        </div>
    </div>
)

}

export default SimpleTodoFunctional;