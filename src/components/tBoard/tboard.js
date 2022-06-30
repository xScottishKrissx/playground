import React,{useRef, useState} from 'react'

import {DndProvider, useDrop, useDrag} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {TouchBackend} from 'react-dnd-touch-backend'

import './tboard.css'

export default function Tboard() {

    // localStorage.clear()
    const currentTasksLocalStorage = JSON.parse(localStorage.getItem("currentTasks"))

    const form = useRef()
    const [currentTasks, setCurrentTasks] = useState(currentTasksLocalStorage || [])
    const [inProgress, setInProgress] = useState([])


    const addItem = () =>{
        const formValue = form.current.value

        if(formValue.length > 1){
            let itemsArray = currentTasks || []
            itemsArray.push({'id':"item-" + (currentTasks.length + 1) , 'text': formValue})
            setCurrentTasks(currentTasks => ([...currentTasks]))
            setLocalStorage("currentTasks",currentTasks)
          }
    }

    const removeItem = (itemId) =>{
        let removeFromCurrentTasks = currentTasks
        const getResultOfFilter = removeFromCurrentTasks.filter((x) => x.id !== itemId)
        setCurrentTasks(getResultOfFilter)
        setLocalStorage("currentTasks",getResultOfFilter)
    }

    const setLocalStorage = (name, thingToSave) =>{
        localStorage.setItem(name, JSON.stringify(thingToSave))
    }




    // console.log(currentTasks)
    const mapCurrentTask = currentTasks.map((x, key) => {
        return(
            <p onClick={()=>removeItem(x.id)} key={key} id={x.id}>{x.text}</p>
        )
    })


  return (
    <DndProvider backend={HTML5Backend}>
        <div>
            {/* User Input */}
            <form>
                <input ref={form} />
            </form>
            <button onClick={addItem}>Add</button>

            {/* Board */}
            <div className='boardWrapper'>
                <div>
                    Current Tasks
                    {mapCurrentTask}
                </div>

                <div>
                    In Progress
                    
                </div>
            </div>
        </div>
    </DndProvider>
  )
}
