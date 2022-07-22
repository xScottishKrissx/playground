import React,{useRef, useState, useEffect} from 'react'



export default function ItemWindow({itemWindowState, item, closeItemWindow, columnId, addDescription, updateTitle}) {

    const {id, content, description} = item


    
    const addDescriptionForm = useRef()
    const changeTitleForm = useRef()
    const itemWindow = useRef()
    
    const addNewDescription = (fieldToChange) =>{
        console.log(fieldToChange)
        // turnOffDrag(true)
        const formValue = addDescriptionForm.current.value
        addDescription(formValue, columnId, itemWindowState.itemId, fieldToChange)
        addDescriptionForm.current.value = ""
    }

    const changeTitle = () =>{
        const formValue = changeTitleForm.current.value
        updateTitle(formValue, columnId, itemWindowState.itemId)
        console.log(formValue)
    }



    
    
    return (
        <>

            {itemWindowState.itemId === id ? 
                <>
                <span onClick={closeItemWindow} className='itemWindowBackground'>Item Window Background</span>
                <div id={columnId} ref={itemWindow} className='itemWindow' >
                    {/* <h2>{content}</h2>     */}
                    <form  >
                        <h2>
                            <textarea ref={changeTitleForm} onChange={changeTitle} value={content} />
                        </h2>    
                    </form>
                    {/* <p>{description}</p> */}

                    <hr />
                    {description.length > 0 ?  
                        <>
                            <form  >
                                <textarea ref={addDescriptionForm} onChange={()=>addNewDescription("description")} value={description} />
                            </form>
                        </>
                    : 
                    <>
                            <form >
                                <textarea  aria-controls='none' onChange={()=>addNewDescription("description")} ref={addDescriptionForm} placeholder="Add Description"/>
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
