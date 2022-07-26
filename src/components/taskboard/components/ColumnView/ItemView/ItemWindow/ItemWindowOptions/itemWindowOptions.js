import React,{useState} from 'react'
import DeleteItem from '../deleteItem'



export default function ItemWindowOptions({handleDeleteItem, itemId, columnId, closeItemWindow}) {

    const [showBox, setBoxView] = useState(false)

    const confirm = () =>{
        setBoxView(false)
        handleDeleteItem( itemId, columnId,)
    }

  return (
    <>
        <div className='itemWindowOptions'>
            <span onClick={()=>setBoxView(true)} title="Delete Item" className="material-icons-outlined">delete_outline</span>

            <span title="Mark as Done" className="material-icons-outlined">radio_button_unchecked</span>

            <button title="Save any changes and close window" onClick={closeItemWindow}>Save and Close</button>
        </div>

        <DeleteItem 
            confirmDelete={confirm} 
            cancelDelete={()=>setBoxView(false)}
            showBoxMessage={showBox} 
        />
    </>
  )
}
