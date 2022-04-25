import * as React from 'react'
import { useState,useRef } from 'react'
import DeleteAll from './deleteAll/deleteAll'
import DisplayList from './displayList/displayList'


// Import functions
import EmptyFieldWarningMessage from './emptyFieldWarningMessage/EmptyFieldWarningMessage'
import InputBox from './inputBox/InputBox'

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
    const startEdit = (index) => {
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

    return(

    <div className="simpleTodo__container d-flex flex-column justify-content-center align-items center h-100 w-100 position-relative"> 

        {/* Delete All Button */}
        <DeleteAll itemsLength={items.length} ref={confirmDeleteAll} handleDelete={()=>handleDelete('',items.length)} confirmDelete={toggleConfirmDeleteAllBox} />
                
        <h2>Simple To-Do</h2>

        {/* Empty Field Warning Message */}
        <EmptyFieldWarningMessage ref={emptyFieldWarning}/>

        {/* List Item Entry */}
        <InputBox ref={formInput} edit={edit.editMode} addItem={addItem} submitEdit={submitEdit} cancelEdit={cancelEdit}/>

        {/* The To Do List */}
        <div className="simpleTodo__list w-100"> 
            <DisplayList items={items} startEdit={startEdit} handleDelete={handleDelete} />
        </div>
            
    </div>
    )

}

export default SimpleTodoFunctional;