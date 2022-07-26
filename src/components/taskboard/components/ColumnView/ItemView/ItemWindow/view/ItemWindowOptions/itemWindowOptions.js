import React,{useState} from 'react'

import './itemWindowOptions.css'

import ItemStatus from '../../../utilityComponents/itemStatus'
import DeleteItem from '../../../utilityComponents/deleteItem'

export default function ItemWindowOptions({handleDeleteItem, itemId, columnId, closeItemWindow, itemStatus,markAsDone}) {

    const [showBox, setBoxView] = useState(false)

    const confirm = () =>{
        setBoxView(false)
        handleDeleteItem( itemId, columnId,)
    }

  return (
    <>
        <div className='itemWindowOptions'>
            {/* Delete Item */}
            <span onClick={()=>setBoxView(true)} title="Delete Item" className="material-icons-outlined">delete_outline</span>
            
            {/* Change Item Status */}
            <ItemStatus itemStatus={itemStatus} itemId={itemId} columnId={columnId} markAsDone={markAsDone}/>
            
            {/* Close Window */}
            <span title="Save any changes and close window" onClick={closeItemWindow} className="material-icons-outlined">save</span>
           
        </div>

        {/* Confirm Delete Message */}
        <DeleteItem 
            confirmDelete={confirm} 
            cancelDelete={()=>setBoxView(false)}
            showBoxMessage={showBox} 
        />
    </>
  )
}
