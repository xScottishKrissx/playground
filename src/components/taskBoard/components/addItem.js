import React,{useRef} from 'react'
import { forwardRef } from 'react'


export const AddItem = forwardRef((props, ref) => {
    // console.log(addItem)
  return (
    <div>
        <p>Add Task</p>
        <form >
            <input ref={ref} placeholder='add task'/>
        </form>
        
        <button onClick={props.addItem} >Add Item</button>
    </div>
  )
})
export default AddItem;
