import React from 'react'
import { useState } from 'react'
import {useDrop} from 'react-dnd'

import Image from './image'
import images from './importImages'


    const mapImages = images.map((x) => {
        return <Image key={x.id} src={x.src} id={x.id} /> 
    })

export default function DragDrop() {
    
    const [board, setBoard] = useState([])
    const [{isOver, changeColourWhileDragging}, drop] = useDrop(()=> ({
        accept:"image",
        drop: (item) => addImageToBoard(item.id),
       
        collect:(monitor) => ({
            // isOver:!!monitor.isOver(),
            // Use to check if an item is currently droppable
            isOver: monitor.isOver() && monitor.canDrop(),
            changeColourWhileDragging:monitor.canDrop() && !monitor.isOver()
            
        }),

        
    }))

    // console.log(changeColourWhileDragging)
    
    const addImageToBoard = (id) =>{
        // console.log(id)
        const imagesList = images.filter((image) => image.id === id)

        // Add Elements
            // setBoard((board) => [...board, imagesList[0]])
        // Replace Elements
            setBoard([imagesList[0]])
    }

    const mapBoard = board.map((x, key) =>{
        return (
            <div className='droppedItem' key={key}>
                <Image key={x.id} src={x.src} id={x.id} />
                <div className='droppedItem__info'>
                    <p>{x.name}</p>
                    <p>{x.option}</p>
                </div>
            </div>
            )
    })
    // console.log(isOver)

    const hoverMessage = isOver ? 'Release to drop' : 'Drag item here'
    const hovering = "0px 5px 10px -5px green"
    const notHovering = changeColourWhileDragging ? "0px 5px 5px -5px red" : "0px 5px 5px -5px black"

    return (
        <>

            <div className='thingsToDrag'> {mapImages} </div>

            <div 
                className='placeToDrop' 
                ref={drop} 
                style={{
                    boxShadow: isOver ? hovering : notHovering
                }}
            >
                { board.length > 0 ? mapBoard : <span>{hoverMessage}</span> }
            </div>


            <button className='resetBoardButton' onClick={()=>setBoard([])}>Reset Board</button>
        </>
    )
}
