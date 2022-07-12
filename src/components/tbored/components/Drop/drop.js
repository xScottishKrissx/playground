import React,{useRef, useState} from 'react'
import { useDrop} from 'react-dnd'

import MapContent from '../Drag/drag'

export default function Board({items, setItems, setLocalStorage, index}) {
    const ref = useRef(null)
    const overlay = useRef()
    const addToBoard = (itemId, newBoard) =>{

        let itemsCopy = JSON.parse(localStorage.getItem("tbored-items")) || []
        let changeBoard = itemsCopy.map(x => {
            if( x.id === itemId ){ x.board = newBoard } return x
        })
        setItems(changeBoard)
        setLocalStorage("tbored-items", changeBoard)
    }

    const [{isOver}, toInProgress] = useDrop(()=>({
        accept:"text",
        drop:(item) => addToBoard(item.id,"inProgress"),
        collect:(monitor) =>({
            isOver: monitor.canDrop()
        })
    }))

    // console.log(isOver)
    if(isOver){
        // overlay.current.classList.add("showOverlay")
        
    }



    const [, toUnassigned] = useDrop(()=>({
        accept:"text",
        drop:(item) => addToBoard(item.id,"unassigned"),

    }))

    const [draggedItem, setDraggedItem] = useState()
    const [draggedOverItem, setDraggedOverItem] = useState()

    const getDraggedItem = (x) =>{
        setDraggedItem(x)
    }

    const getDraggedOverItem = (x, indexxxx) =>{
        setDraggedOverItem(x)

        if(draggedItem === draggedOverItem){
            // console.log("It's the same, so stop Dragging")
            return
        }

        
        let spliceItems = items.filter((item) => item !== draggedItem)
        // console.log(spliceItems)
        // console.log(indexxxx)
        // console.log(draggedItem)
        spliceItems.splice(indexxxx, 0, draggedItem)

        // This might be it...
        // console.log(spliceItems)
        setItems(spliceItems)
        setLocalStorage("tbored-items", spliceItems)
    }
    


    return (
        <div className='boardWrapper'>

            <div className='dropArea unassigned' ref={toUnassigned}>
                <span ref={overlay} className='moveBoardOverlay'>BackgroundThing</span>
                <h3>Unassigned</h3>
                {/* {mapUnassigned} */}
                <MapContent itemsArray={[...items]} boardName={"unassigned"} setDraggedItem={getDraggedItem} setDraggedOverItem={getDraggedOverItem}/>
                
                
            </div>

            <div className='dropArea inprogress' ref={toInProgress} >
                <h3>In Progress</h3>
                {/* {mapInProgress} */}
                <MapContent itemsArray={[...items]} boardName={"inProgress"} setDraggedItem={getDraggedItem} setDraggedOverItem={getDraggedOverItem}/>
            </div>

        </div>
    )
}
