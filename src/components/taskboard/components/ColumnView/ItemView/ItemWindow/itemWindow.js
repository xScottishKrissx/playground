import React,{useRef, useState, useEffect} from 'react'



export default function ItemWindow({itemWindowState, item, closeItemWindow, columnId, addDescription}) {

    const {id, content, description} = item
    
    const addDescriptionForm = useRef()
        
    const addNewDescription = () =>{
        // turnOffDrag(true)
        const formValue = addDescriptionForm.current.value
        addDescription(formValue, columnId, itemWindowState.itemId)
        addDescriptionForm.current.value = ""
    }

    const handleBlur = () =>{
        console.log("Blur")
        if(document.activeElement === addDescriptionForm.current){
            console.log("Do Something")
        }
    }
  
    return (
        <>

            {itemWindowState.itemId === id ? 
                
                <div className='itemWindow' onFocus={null} onBlur={handleBlur} >
                    <h2>{content}</h2>    
                    {/* <p>{description}</p> */}

                    <hr />
                    {description.length > 0 ?  
                        <>
                            <form  >
                                <textarea ref={addDescriptionForm} onChange={addNewDescription} value={description} />
                            </form>
                        </>
                    : 
                    <>
                            <form >
                                <textarea aria-controls='none' onChange={addNewDescription} ref={addDescriptionForm} placeholder="Add Description"/>
                            </form>
                            <span>Add Description</span>
                        </>
                    }
                    <button onClick={closeItemWindow}>Save and Close</button>
                </div>

                : null}

            
        
        </>
    )
}
