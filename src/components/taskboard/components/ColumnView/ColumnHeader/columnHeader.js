import React,{useState} from 'react'

import './columnHeader.css'

export default function ColumnHeader({provided, column, confirmDelete, confirmResetBoard,id}) {

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
            
            <span title="Delete Board" alt="Delete Board" onClick={()=>showConfirmBox(true,"delete")}>
                <span className="material-icons">delete</span>
            </span>
            

        </div>

        <h2 {...provided.dragHandleProps}>{column.name}</h2>
        

        {!showBox ? null :
            <div className='confirmBox'>
                <p>This action is irreversible</p>

                <div className='confirmBoxButtons'>
                    {instruction === "delete" ? 
                        <button className='confirmButton' onClick={()=>handleConfirm(confirmDelete(id))}>Confirm Delete</button>
                        :
                        <button className='confirmButton' onClick={()=>handleConfirm(confirmResetBoard(id))}>Confirm Reset</button>
                    }                
                    <button className='cancelButton' onClick={()=>showConfirmBox(false)}>Cancel</button>
                </div>

            </div>
        }
    </div>
  )
}
