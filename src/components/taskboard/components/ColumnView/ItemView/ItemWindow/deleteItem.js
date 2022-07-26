import React,{useState} from 'react'

export default function DeleteItem({showBoxMessage, confirmDelete, cancelDelete}) {
  return (
    <div>
        {!showBoxMessage ? null : 
            <div className='confirmDeleteAllBox'>
                <p>Warning: This action is irreversible</p>
                <span className='confirmDeleteAllBoxButtons'>
                    <button onClick={()=>confirmDelete()}>Confirm Delete All</button>
                    <button onClick={()=>cancelDelete()}>Cancel</button>
                </span>
            </div>
        }
    </div>
  )
}
