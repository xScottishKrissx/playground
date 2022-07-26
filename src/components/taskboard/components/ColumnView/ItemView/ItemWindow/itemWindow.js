import React,{useRef, useState, useEffect} from 'react'
import DeleteItem from '../utilityComponents/deleteItem'
import ItemWindowOptions from './ItemWindowOptions/itemWindowOptions'

export default function ItemWindow({itemWindowState, item, closeItemWindow, columnId, addDescription, updateTitle, handleDeleteItem, markAsDone}) {

    const {id, content, description, status} = item

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

                        <div className='itemWindowItemHeader'>
                            <form>
                                <h2>
                                    <input maxLength={20} id="formTitle" ref={changeTitleForm} onChange={changeTitle} value={content} />
                                </h2>    
                            </form>
                        </div>

                        <div className='itemWindowItemDescription'>
                            <form>
                                {description.length > 0 ?  
                                    <textarea ref={addDescriptionForm} onChange={addNewDescription} value={description} />
                                    :
                                    <textarea ref={addDescriptionForm} onChange={addNewDescription}  placeholder="Add Description"/>
                                }
                            </form>
                        </div>

                        <ItemWindowOptions 
                            columnId={columnId} 
                            closeItemWindow={closeItemWindow}
                            handleDeleteItem={handleDeleteItem} 
                            itemId={itemWindowState.itemId} 
                            itemStatus={status}
                            markAsDone={markAsDone}
                        />

                    </div>
                </>

                : null}

            
        
        </>
    )
}
