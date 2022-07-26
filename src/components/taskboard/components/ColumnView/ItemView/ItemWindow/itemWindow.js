import React,{useRef} from 'react'

import './itemWindow.css'

import ItemDescription from './view/itemDescription/itemDescription'
import ItemHeader from './view/itemHeader/itemHeader'
import ItemWindowOptions from './view/ItemWindowOptions/itemWindowOptions'

export default function ItemWindow({itemWindowState, item, closeItemWindow, columnId, addDescription, updateTitle, handleDeleteItem, markAsDone}) {

    const {id, content, description, status} = item

    const itemWindow = useRef()
    
    return (
        <>
            {itemWindowState.itemId === id ? 
                <>
                    <span onClick={closeItemWindow} className='itemWindowBackground'>Item Window Background</span>

                    <div id={columnId} ref={itemWindow} className='itemWindow' >

                        <ItemHeader 
                            content={content} 
                            columnId={columnId} 
                            itemId={itemWindowState.itemId} 
                            updateTitle={updateTitle} 
                        />

                        <ItemDescription 
                            descriptionLength={description.length} 
                            currentDescription={description} 
                            addDescription={addDescription} 
                            itemId={itemWindowState.itemId} 
                            columnId={columnId}
                        />

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

                : 
                    null
                }

            
        
        </>
    )
}
