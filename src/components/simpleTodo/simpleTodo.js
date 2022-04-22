import * as React from 'react'
import { useState,useRef } from 'react'


// Import functions
import EmptyFieldWarningMessage from './EmptyFieldWarningMessage'

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
    const emptyFieldWarning = useRef(false)
    const formInput = useRef(null)
    const confirmDeleteAll = useRef(false)

// Add Item
    const addItem = () => {
        // console.log("Add New Item");

        toggleEditMode(false)
        const value = formInput.current.value     
        if(value.length > 1){
            let itemsArray = items || [] 
            itemsArray.push(value)
            setItem(items => ([...items]))
            setFormValue(null)      
            setLocalStorage(items)
            toggleEmptyFieldWarning()
        }else{
            toggleEmptyFieldWarning(true)
        }
    }

// Edit
    const startEdit = (index,e) => {
        // console.log("Start Edit");

        setFormValue(getLocalStorage[index])
        setEditState({editMode:true,editIndex:index})
        toggleEmptyFieldWarning()
    }

    const cancelEdit = () => {
        setFormValue(null)
        toggleEditMode(false)
        
    }
    const submitEdit =() => {        

        const newValue = formInput.current.value
        if(newValue.length < 1) {
            toggleEditMode(false)
            toggleEmptyFieldWarning(true)
            return
        }

        getLocalStorage.splice(edit.editIndex,1,newValue)
        setItem(getLocalStorage) 

        setFormValue(null)
        toggleEditMode(false)
        toggleEmptyFieldWarning()
        setLocalStorage(getLocalStorage)
    }

// Delete
    const handleDelete = (itemIndex, numToDelete) => {
        if(numToDelete > 1) toggleConfirmDeleteAllBox()

        getLocalStorage.splice(itemIndex,numToDelete)      

        setFormValue(null)
        toggleEditMode(false)
        toggleEmptyFieldWarning()
        setItem(getLocalStorage) 
        setLocalStorage(getLocalStorage)
    }

// Utility Functions
    const toggleEmptyFieldWarning = (setVisible) =>{
        if(setVisible)emptyFieldWarning.current.classList.add("show")
        if(!setVisible)emptyFieldWarning.current.classList.remove("show")       
    }



    const setLocalStorage = (toBeStored) =>  localStorage.setItem("items",JSON.stringify(toBeStored))
    const toggleEditMode = (setEditModeTo) => setEditState({editMode:setEditModeTo}) 
    const setFormValue = (setFormValueTo) => formInput.current.value = setFormValueTo
    const toggleConfirmDeleteAllBox = () => confirmDeleteAll.current.classList.toggle("show")

// Display the items
    const mapItems = items.map((x,index) => {
        return(
            <div key={index} className="simpleTodo__singleItem d-flex mt-3">

                <p className="w-75 m-0 p-0">{x}</p>

                <div  className="simpleTodo__singleItemButtons d-flex justify-content-evenly align-items-center w-25">
                    <span role="button" onClick={(e)=>startEdit(index,e)} className="material-icons simpleTodo__editButton text-info">edit</span>
                    <span role="button" onClick={()=>handleDelete(index, 1)} className="material-icons simpleTodo__deleteButton text-danger">delete</span>
                </div>

                
            </div>
        )
    })

    return(

        <div className="simpleTodo__container d-flex flex-column justify-content-center align-items center h-100 w-100 position-relative"> 



    {/* Delete All Button */}
        {items.length > 1 ?

            <div className="simpleTodo__deleteAllContainer mb-4 top-0 w-100 ">
                
                <button className="simpleTodo__deleteAllButton border-0 d-flex align-items-center justify-content-center p-2 w-100"  onClick={()=>toggleConfirmDeleteAllBox()}>
                    <span className="material-icons">delete_sweep</span>Delete All
                </button>

                <div className="simpleTodo__confirmDeleteAllContainer border-0 align-items-center justify-content-evenly w-100" ref={confirmDeleteAll} >
                    <span className="bg-danger text-white" id="simpleTodo__confirmDeleteAllButton" role="button" onClick={()=>handleDelete('',items.length)}>Confirm</span>
                    <span className="bg-secondary text-white" id="simpleTodo__confirmCancelButton" role="button" onClick={toggleConfirmDeleteAllBox}>Cancel</span>
                </div>
            </div>

        :null}  
            
            <h2>Simple To-Do</h2>

    {/* Empty Field Warning Message */}
                {/* <div ref={emptyFieldWarning} className="simpleTodo__emptyFieldWarning">
                    <p className="d-flex">
                        <span className="material-icons">priority_high</span>
                        <strong>oops, this field <span className="text-decoration-underline">cannot</span> be empty</strong>
                    </p>
                </div> */}

                <EmptyFieldWarningMessage ref={emptyFieldWarning}/>


    {/* List Item Entry */}
            <div className="simpleTodo__formContainer d-flex w-100">


                <form className="simpleTodo__form border-0 lh-lg w-100">
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
            <div className="simpleTodo__list w-100"> {mapItems} </div>
            
        </div>
    )

}

export default SimpleTodoFunctional;