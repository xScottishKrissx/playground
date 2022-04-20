import * as React from 'react'
import { useState,useRef,useEffect } from 'react'

import './simpleTodo.css'

export const SimpleTodoFunctional = () =>{

    // Reset Local Storage Manually
    // localStorage.clear()


    const getLocalStorage = JSON.parse(localStorage.getItem("items"))
    // console.log(getLocalStorage)

    const [items, setItem] = useState(getLocalStorage || [])

    const [edit, setEditState] = useState({
        editMode:false,
        editIndex:false
    })
    const formInput = useRef(null)




    function handleNewItem(){
        console.log("Add New Item");
        setEditState({editMode:false})
    // Grab the value of the input box using the ref and add it to a new or existing array of items
        const value = formInput.current.value     

        if(value.length > 1){
            let itemsArray = items || [] 
            itemsArray.push(value)  
    
        // Set the new state which will update the page.
            setItem(items => ([...items]))    
    
        // Save the items array to local state
            localStorage.setItem("items",JSON.stringify(items))
            // console.log(items)
    
        // Clear the input after adding a new item
            formInput.current.value = null
        }else{
            console.log("Do Nothing")
        }
    }

    function startEdit(index){
        console.log("Start Edit");
        const edit = getLocalStorage[index]
        setEditState({editMode:true, editIndex:index})
        formInput.current.value = edit
    }

    function submitEdit(){        
        console.log("Submit Edit");
        // Check length of current value, if empty stop edit mode
        const newValue = formInput.current.value
        if(newValue.length < 1) {
            setEditState({editMode:false})
            alert("Error: Field cannot be empty")
            return
        }
 
        // loop through local storage array and push to new array. If index of target matches index in array, push a new value in its place  
        const valueToChange = edit.editIndex
        // let editedArray = []


        // getLocalStorage.forEach((x,index) => {
        //     if(index === valueToChange){ editedArray.push(newValue) }else{ editedArray.push(x) }
        // })

        getLocalStorage.splice(valueToChange,1,newValue)
        // console.log(getLocalStorage);


        // set the new array to state, cancel edit mode and add the new items array to local storage
        setItem(getLocalStorage) 
        setEditState({editMode:false})
        localStorage.setItem("items",JSON.stringify(getLocalStorage))

        // empty the form input after confirming an edit
        formInput.current.value = null

    }




    function handleDelete(itemIndex){

        getLocalStorage.splice(itemIndex,1)
        setItem(getLocalStorage) 
        localStorage.setItem("items",JSON.stringify(getLocalStorage))
        
    }

    // Display the items array in a readable format.
    const mapItems = items.map((x,index) => {
        return(
            <div key={index} className="simpleTodo__singleItem d-flex">
                <p className="w-75">{x}</p>

                <div  className="simpleTodo__singleItemButtons w-25">
                    <span role="button" onClick={()=>startEdit(index)} className="material-icons simpleTodo__editButton">edit</span>
                    <span role="button" onClick={()=>handleDelete(index)} className="material-icons simpleTodo__deleteButton">delete</span>
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
                <button onClick={()=>handleNewItem()}>
                    <span className="material-icons">add</span></button>
                : 
                <button onClick={()=>submitEdit()}><span className="material-icons">edit</span></button>
                }


            
        </div>

        <div className="simpleTodo__list">

            {mapItems}

        </div>
    </div>
)

}

export default SimpleTodoFunctional;