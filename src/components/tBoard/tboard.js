import React,{useRef, useState} from 'react'

import {DndProvider, useDrop, useDrag} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {TouchBackend} from 'react-dnd-touch-backend'

import './tboard.css'

export default function Tboard() {

    // localStorage.clear()
    const currentTasksLocalStorage = JSON.parse(localStorage.getItem("currentTasks"))
    const inProgressLocalStorage = JSON.parse(localStorage.getItem("inProgress"))

    const form = useRef()
    const [currentTasks, setCurrentTasks] = useState(currentTasksLocalStorage || [])
    const [inProgress, setInProgress] = useState(inProgressLocalStorage || [])


    const addItem = () =>{
        const formValue = form.current.value

        if(formValue.length > 1){
            let itemsArray = currentTasks || []
            itemsArray.push({'id':"item-" + (currentTasks.length + 1) , 'text': formValue})
            setCurrentTasks(currentTasks => ([...currentTasks]))
            setLocalStorage("currentTasks",currentTasks)
          }
    }

    const addToInProgress = (itemId) =>{
        // console.log(itemId)
        let filterCurrentTasks = currentTasks
        const getResultOfFilter = filterCurrentTasks.filter((x) => x.id === itemId)
        const mergedArrays = [...inProgress, ...getResultOfFilter]
        setInProgress(mergedArrays)
        setLocalStorage("inProgress",mergedArrays)
    }

    const removeItem = (itemId) =>{
        // console.log("Remove Item", itemId)
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
            // <p onClick={()=>removeItem(x.id)} key={key} id={x.id}>{x.text}</p>
            <TaskItem id={x.id} key={key} text={x.text} />
        )
    })

    const mapInProgress = inProgress.map((x,key) =>{
        return(
            <TaskItem id={x.id} key={key} text={x.text} />
        )
    })

// Dragging
    function TaskItem(props){
        // console.log(props.id)
        const [{}, drag] = useDrag(()=>({
            type: "text",
            // this matches the drop function
            item:{id:props.id}
        }))

        return  <p ref={drag} id={props.id}>{props.text}</p>
    }

// Dropping
    function DropItem(){
        
        const [{isOver}, drop] = useDrop(()=>({
            accept: "text",
            // this matches the drag function
            drop:(item) => handleDrop(item.id),
            collect: (monitor) => ({
                isOver: monitor.isOver()  && monitor.canDrop()
            })
        }))

        const [{isOver2}, drop2] = useDrop(()=>({
            accept: "text",
            // this matches the drag function
            drop:(item) => handleDrop2(item.id),
            collect: (monitor) => ({
                isOver2: monitor.isOver()  && monitor.canDrop()
            })
        }))
        // console.log(isOver)

        return (
            <div className='boardWrapper'>
                <div className='dropArea' ref={drop2}>
                    <h4>Current Tasks</h4>
                    {mapCurrentTask}
                </div>
                <div className='dropArea' ref={drop}>
                    <h4>In Progress</h4>
                    {mapInProgress}
                </div>
            </div>
        )
    }

    const handleDrop = (itemId) =>{
        addToInProgress(itemId)
        removeItem(itemId)
        console.log("Handle Drop 1")
    }
    const handleDrop2 = (itemId) =>{
        console.log(itemId)
        addToCurrent(itemId)
        removeFromInProgress(itemId)
        console.log("Handle Drop 2")
        // removeItem(itemId)
        
    }

    const addToCurrent = (itemId) =>{
        console.log("Add to Current")
        let filterInProgress = inProgress
        // console.log(filterInProgress)
        const getResultOfFilter = filterInProgress.filter((x) => x.id === itemId)
        // console.log(getResultOfFilter)


        const mergedArrays = [...currentTasks, ...getResultOfFilter]
        // console.log(mergedArrays)
        setCurrentTasks(mergedArrays)
        setLocalStorage("currentTasks",mergedArrays)
    }

    const removeFromInProgress = (itemId) =>{
        console.log(itemId)
        let filterCurrentTasks = inProgress
        const getResultOfFilter = filterCurrentTasks.filter((x) => x.id === itemId)
        const mergedArrays = [...inProgress, ...getResultOfFilter]
        console.log(mergedArrays)
        setInProgress(mergedArrays)
        setLocalStorage("inProgress",mergedArrays)
    }
    

    // console.log(currentTasks)
    // console.log(inProgress)
  return (
    <DndProvider backend={HTML5Backend}>
        <div>
            {/* User Input */}
            <form>
                <input ref={form} />
            </form>
            <button onClick={addItem}>Add</button>

            {/* Board */}
            <DropItem />
            {/* <div className='boardWrapper'>
                <div>
                    Current Tasks
                    {mapCurrentTask}
                </div>

                <div>
                    In Progress
                    <DropItem />
                </div>
            </div> */}
        </div>
    </DndProvider>
  )
}
