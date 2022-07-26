import React,{useRef, useState, useEffect} from 'react'
import DeleteItem from './deleteItem'
import ItemWindowOptions from './ItemWindowOptions/itemWindowOptions'

export default function ItemWindow({itemWindowState, item, closeItemWindow, columnId, addDescription, updateTitle, handleDeleteItem}) {

    const {id, content, description} = item

    const addDescriptionForm = useRef()
    const changeTitleForm = useRef()
    const itemWindow = useRef()
    
    const addNewDescription = () =>{
        const formValue = addDescriptionForm.current.value
        addDescription(formValue, columnId, itemWindowState.itemId)
    }

    const changeTitle = () =>{
        const formValue = changeTitleForm.current.value
        updateTitle(formValue, columnId, itemWindowState.itemId)
    }

    return (
        <>

            {itemWindowState.itemId === id ? 
                <>
                    <span onClick={closeItemWindow} className='itemWindowBackground'>Item Window Background</span>
                    <div id={columnId} ref={itemWindow} className='itemWindow' >

                        <form >
                            <h2>
                                <input maxLength={20} id="formTitle" ref={changeTitleForm} onChange={changeTitle} value={content} />
                            </h2>    
                        </form>

                        
                        {description.length > 0 ?  
                            <>
                                <form  >
                                    <textarea ref={addDescriptionForm} onChange={addNewDescription} value={description} />
                                </form>
                            </>
                        : 
                            <>
                                <form >
                                    <textarea  aria-controls='none' onChange={addNewDescription} ref={addDescriptionForm} placeholder="Add Description"/>
                                </form>
                                <span>Add Description</span>
                            </>
                        }

                        <ItemWindowOptions 
                            columnId={columnId} 
                            closeItemWindow={closeItemWindow}
                            handleDeleteItem={handleDeleteItem} 
                            itemId={itemWindowState.itemId} 
                        />

                    </div>
                </>

                : null}

            
        
        </>
    )
}
