import React,{useRef, useState, useEffect} from 'react'



export default function ItemWindow({itemWindowState, item, closeItemWindow, columnId, addDescription}) {

    const {id, content, description} = item


    
    const addDescriptionForm = useRef()
    const itemWindow = useRef()
    
    const addNewDescription = () =>{
        // turnOffDrag(true)
        const formValue = addDescriptionForm.current.value
        addDescription(formValue, columnId, itemWindowState.itemId)
        addDescriptionForm.current.value = ""
    }



    
    
    return (
        <>

            {itemWindowState.itemId === id ? 
                <>
                <span onClick={closeItemWindow} className='itemWindowBackground'>Item Window Background</span>
                <div id={columnId} ref={itemWindow} className='itemWindow' >
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
                    </>

                : null}

            
        
        </>
    )
}
