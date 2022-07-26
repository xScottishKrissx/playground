import React,{useState} from 'react'
import DeleteItem from '../ColumnView/ItemView/utilityComponents/deleteItem'

export default function TaskboardHeader({resetBoard}) {

    const [showBox, setBoxView] = useState(false)

    const confirm = () =>{
        setBoxView(false)
        resetBoard()
    }

  return (
    <div className='taskboardHeader'>
        
        <h2>Simple Taskboard</h2>

        <span className='deleteAllButton' onClick={()=>setBoxView(true)}>
            <span>Delete All</span>
            <span className="material-icons-outlined">delete_sweep</span>
        </span>


        <DeleteItem 
            confirmDelete={confirm} 
            cancelDelete={()=>setBoxView(false)}
            showBoxMessage={showBox} 
        />
        

        

        {/* {!showBox ? null : 
            <div className='confirmDeleteAllBox'>
                <p>This action is irreversible</p>
                <span className='confirmDeleteAllBoxButtons'>
                    <button onClick={confirm}>Confirm Delete All</button>
                    <button onClick={()=>setBoxView(false)}>Cancel</button>
                </span>
            </div>
        } */}

    </div>
  )
}
