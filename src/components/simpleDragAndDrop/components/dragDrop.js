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
    const [{isOver}, drop] = useDrop(()=> ({
        accept:"image",
        drop: (item) => addImageToBoard(item.id),
        collect:(monitor) => ({
            isOver:!!monitor.isOver(),
        }),
    }))
    
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

    return (
        <>
            <div className='thingsToDrag'> {mapImages} </div>

            <div className='placeToDrop' ref={drop}>
                {board.length > 0 ? mapBoard : <span>Drop Here</span>}
            </div>
        </>
    )
}
