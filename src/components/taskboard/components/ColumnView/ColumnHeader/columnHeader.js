import React,{useState} from 'react'

import './columnHeader.css'
import ColumnHeaderTitle from './columnHeaderTitle'

export default function ColumnHeader({provided, column, confirmDelete, confirmResetBoard,id, updateTitle}) {

    const [showBox, setBox] = useState(false)
    const [instruction, setInstruction] = useState()

    const showConfirmBox = (x, y) =>{
        setBox(x)
        setInstruction(y)
    }

    const handleConfirm = (x) =>{
        setBox(false)
        return x
    }

     

  return (
    <div className='columnHeader'>


        <div className='columnHeaderButtons'>

            <span title='Clear Board' alt="Clear Board" onClick={()=>showConfirmBox(true,"reset")}>
                <span className="material-icons">restart_alt</span>
            </span>

            <span title="Click and Drag to Move Column" className="material-symbols-outlined" {...provided.dragHandleProps}> drag_handle</span>

            <span title="Delete Board" alt="Delete Board" onClick={()=>showConfirmBox(true,"delete")}>
                <span className="material-icons">delete</span>
            </span>

        </div>

        {/* <h2 {...provided.dragHandleProps}>{column.name}</h2> */}
        <ColumnHeaderTitle updateTitle={updateTitle} columnId={id} content={column.name} />


        {!showBox ? null :
            <>
            
            <span onClick={()=>setBox(false)} className='itemWindowBackground'>Item Window Background</span>
            <div className='confirmBox'>

                {instruction === "reset" ? 
                    <p>This action keeps the board but removes all items.</p> 
                    : 
                    <p>This action deletes the entire board and all items.</p>
                }

                <div className='confirmBoxButtons'>
                    {instruction === "delete" ? 
                        <button className='confirmButton' onClick={()=>handleConfirm(confirmDelete(id))}>Confirm Delete</button>
                        :
                        <button className='confirmButton' onClick={()=>handleConfirm(confirmResetBoard(id))}>Confirm Reset</button>
                    }                
                    <button className='cancelButton' onClick={()=>showConfirmBox(false)}>Cancel</button>
                </div>

            </div>
            </>
        }
    </div>
  )
}
