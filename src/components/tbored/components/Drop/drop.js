import React from 'react'
import { useDrop} from 'react-dnd'

import MapContent from '../Drag/drag'

export default function Board({items, setItems, setLocalStorage}) {
    // console.log(items)
    // console.log("Drop: " , items)
    const addToBoard = (itemId, newBoard, test) =>{

        // console.log(itemId)
        // console.log(newBoard)
        // console.log(test)
        // console.log(items)
        // let itemsCopy = [...items]
        // let itemsCopy = [...test]

        let itemsCopy = JSON.parse(localStorage.getItem("tbored-items")) || []
        // console.log(itemsCopy)
        let changeBoard = itemsCopy.map(x => {
            if( x.id === itemId ){ 
                x.board = newBoard
            }

            return x
        })
        // console.log(changeBoard)
        setItems(changeBoard)
        setLocalStorage("tbored-items", changeBoard)
    }

    const [{}, toInProgress] = useDrop(()=>({
        accept:"text",
        drop:(item) => addToBoard(item.id,"inProgress")
    }))

    const [{}, toUnassigned] = useDrop(()=>({
        accept:"text",
        drop:(item) => addToBoard(item.id,"unassigned")
    }))

    return (
        <div className='boardWrapper'>

            <div className='dropArea' ref={toUnassigned}>
                <h3>Unassigned</h3>
                {/* {mapUnassigned} */}
                <MapContent itemsArray={[...items]} boardName={"unassigned"}/>
                
                
            </div>

            <div className='dropArea' ref={toInProgress}>
                <h3>In Progress</h3>
                {/* {mapInProgress} */}
                <MapContent itemsArray={[...items]} boardName={"inProgress"}/>
            </div>

        </div>
    )
}
