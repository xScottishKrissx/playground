import * as React from 'react'
import { useState,useRef } from 'react'

import './simpleTodo.css'

export const SimpleTodoFunctional = () =>{
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
    const confirmDeleteAll = useRef(false)

// Add Item
    const addItem = () => {
        
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
    const startEdit = (index) => {
        console.log("Start Edit");
        const edit = getLocalStorage[index]
        setFormValue(edit)
        setEditState({editMode:true,editIndex:index})
    }

    const cancelEdit = () => {
        setFormValue(null)
        toggleEditMode(false)
    }
    const submitEdit =() => {        

        const newValue = formInput.current.value
        if(newValue.length < 1) {
            toggleEditMode(false)
            alert("Error: Field cannot be empty")
            return
        }

        const valueToChange = edit.editIndex
        getLocalStorage.splice(valueToChange,1,newValue)

        setFormValue(null)
        setItem(getLocalStorage) 
        toggleEditMode(false)
        setLocalStorage(getLocalStorage)
        

    }

// Delete
    const handleDelete = (itemIndex, numToDelete) => {

        getLocalStorage.splice(itemIndex,numToDelete)

        if(numToDelete > 1) toggleConfirmDeleteAllBox()

        setFormValue(null)
        setItem(getLocalStorage) 
        toggleEditMode(false)
        setLocalStorage(getLocalStorage)
    }

// Utility Functions
    const setLocalStorage = (toBeStored) =>  localStorage.setItem("items",JSON.stringify(toBeStored))
    const toggleEditMode = (setEditModeTo) => setEditState({editMode:setEditModeTo}) 
    const setFormValue = (setFormValueTo) => formInput.current.value = setFormValueTo
    const toggleConfirmDeleteAllBox = () => confirmDeleteAll.current.classList.toggle("show")

// Display the items
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

    {/* Delete All Button */}
        {items.length > 1 ?

            <div className="simpleTodo__deleteAllContainer">
                <button className="simpleTodo__deleteAllButton"  onClick={()=>toggleConfirmDeleteAllBox()}>
                    <span className="material-icons">delete_sweep</span>Delete All
                </button>

                <div className="simpleTodo__confirmDeleteAllContainer " ref={confirmDeleteAll} >
                    <span id="simpleTodo__confirmDeleteAllButton" role="button" onClick={()=>handleDelete('',items.length)}>Confirm</span>
                    <span id="simpleTodo__confirmCancelButton" role="button" onClick={toggleConfirmDeleteAllBox}>Cancel</span>
                </div>
            </div>

        :null}  
            
            <h2>Simple To-Do</h2>
    {/* List Item Entry */}
            <div className="simpleTodo__formContainer">
                <form className="simpleTodo__form">
                    <label htmlFor="itemEntry"></label>
                    <input ref={formInput} type="text" name="itemEntry" />
                </form>
                
                {!edit.editMode ? 
                    <button title="Add To List" onClick={addItem}><span className="material-icons">add_circle_outline</span></button>
                    : 
                    <>
                        <button onClick={submitEdit} title="Confirm Edit"><span className="material-icons">check</span></button>
                        <button onClick={cancelEdit} title="Cancel Edit"><span className="material-icons">close</span></button>
                    </>
                }

            </div>

    {/* The To Do List */}
            <div className="simpleTodo__list"> {mapItems} </div>
            
        </div>
    )

}

export default SimpleTodoFunctional;