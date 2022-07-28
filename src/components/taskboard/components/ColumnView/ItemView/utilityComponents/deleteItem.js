import React,{useState} from 'react'

export default function DeleteItem({showBoxMessage, confirmDelete, cancelDelete}) {
  return (
    <>
        {!showBoxMessage ? null : 
          <div>
              <div className='confirmDeleteAllBox'>
                  <p>Warning: This action is irreversible</p>
                  <div id="warningLine"><hr /></div>
                  <span className='confirmDeleteAllBoxButtons'>
                      <button onClick={()=>confirmDelete()}>Confirm</button>
                      <button onClick={()=>cancelDelete()}>Cancel</button>
                  </span>
              </div>
          </div>
        }
    </>
  )
}
