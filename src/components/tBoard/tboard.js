import React,{useRef, useState} from 'react'

import {DndProvider, useDrop, useDrag} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {TouchBackend} from 'react-dnd-touch-backend'

import './tboard.css'

export default function Tboard() {

    // localStorage.clear()
    const currentTasksLocalStorage = JSON.parse(localStorage.getItem("currentTasks"))
    const inProgressLocalStorage = JSON.parse(localStorage.getItem("inProgress"))
    const counterLocalStorage = JSON.parse(localStorage.getItem("counter"))


    const form = useRef()
    const [currentTasks, setCurrentTasks] = useState(currentTasksLocalStorage || [])
    const [inProgress, setInProgress] = useState(inProgressLocalStorage || [])
    const [counter, setCounter] = useState(counterLocalStorage + 1|| 0)

    
    
    
    
    // console.log(currentTasks)
    const mapCurrentTask = currentTasks.map((x, key) => {
        return(
            // <p onClick={()=>removeItem(x.id)} key={key} id={x.id}>{x.text}</p>
            <DragItem id={x.id} key={key} text={x.text} />
        )
    })

    const mapInProgress = inProgress.map((x,key) =>{
        // console.log(x.id)
        return(
            <DragItem id={x.id} key={key} text={x.text} />
        )
    })

// Dragging
function DragItem(props){
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
            drop:(item) => addToInProgress(item.id),
            collect: (monitor) => ({
                isOver: monitor.isOver()  && monitor.canDrop()
            })
        }))

        const [{isOver2}, drop2] = useDrop(()=>({
            accept: "text",
            // this matches the drag function
            drop:(item) => addToCurrentTasks(item.id),
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

    const addToInProgress = (itemId) =>{
        // Add To inProgress...
        addToBoard(itemId, currentTasks, inProgress)
        // ... then remove from Current Tasks
        removeFromBoard(itemId, currentTasks)
    }
    const addToCurrentTasks = (itemId) =>{
        // Add To Current Tasks --------------
        addToBoard(itemId, inProgress, currentTasks)
        // and then remove from inProgress
        removeFromBoard(itemId, inProgress)
    }

    // What about the completed board?? How will the above fit in?

//Add to Board
    const addToBoard = (itemId, originBoardArray, targetBoardArray) =>{
        let filterArray = originBoardArray
        const getFilterResult = filterArray.filter((x) => x.id === itemId)
        const mergedArrays = [...targetBoardArray, getFilterResult[0]]

        if(targetBoardArray === currentTasks){
            setCurrentTasks(mergedArrays)
            setLocalStorage("currentTasks",mergedArrays)
        }

        if(targetBoardArray === inProgress){
            setInProgress(mergedArrays)
            setLocalStorage("inProgress",mergedArrays)
        }
    }

    // const addToCurrent = (itemId) =>{
    //     console.log("Add to Current")
    //     let filterInProgress = inProgress
    //     const getResultOfFilter = filterInProgress.filter((x) => x.id === itemId)
    //     const mergedArrays = [...currentTasks, ...getResultOfFilter]
    //     setCurrentTasks(mergedArrays)
    //     setLocalStorage("currentTasks",mergedArrays)
    // }

    // const addToInProgress = (itemId) =>{
    //     let filterCurrentTasks = currentTasks
    //     const getResultOfFilter = filterCurrentTasks.filter((x) => x.id === itemId)
    //     const mergedArrays = [...inProgress, ...getResultOfFilter]
    //     setInProgress(mergedArrays)
    //     setLocalStorage("inProgress",mergedArrays)
    // }

    const addItem = () =>{
        const formValue = form.current.value
    
        if(formValue.length > 1){
            let itemsArray = currentTasks || []
            itemsArray.push({'id':"item-" + (counter).toString() , 'text': formValue})
            setCurrentTasks(currentTasks => ([...currentTasks]))
            setLocalStorage("currentTasks",currentTasks)
          }
        setCounter(counter + 1)
        localStorage.setItem("counter", JSON.stringify(counter))
    }

// Remove From Board
const removeFromBoard = (itemId,arrayToFilter) =>{
    let filterArray = arrayToFilter
    const getFilterResult = filterArray.filter((x) => x.id !== itemId)

    if(arrayToFilter === inProgress) {
        setInProgress(getFilterResult)
        setLocalStorage("inProgress", getFilterResult)
    }
    if(arrayToFilter === currentTasks) {
        setCurrentTasks(getFilterResult)
        setLocalStorage("currentTasks", getFilterResult)
    }

}
    // const removeFromInProgress = (itemId) =>{
    //     // console.log(itemId)
    //     let filterInProgress = inProgress
    //     const getResultOfFilter = filterInProgress.filter((x) => x.id !== itemId)
    //     setInProgress(getResultOfFilter)
    //     setLocalStorage("inProgress",getResultOfFilter)
    // }
    
    
    
    // const removeItem = (itemId) =>{
    //     // console.log("Remove Item", itemId)
    //     let removeFromCurrentTasks = currentTasks
    //     const getResultOfFilter = removeFromCurrentTasks.filter((x) => x.id !== itemId)
    //     setCurrentTasks(getResultOfFilter)
    //     setLocalStorage("currentTasks",getResultOfFilter)
    // }

// Set Local Storage
    const setLocalStorage = (name, thingToSave) =>{
        localStorage.setItem(name, JSON.stringify(thingToSave))
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
