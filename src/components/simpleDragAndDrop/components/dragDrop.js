import React from 'react'
import { useState } from 'react'
import {useDrop} from 'react-dnd'

import king from '../assets/king.png'
import knight from '../assets/knight.png'
import rook from '../assets/rook.png'
import Image from './image'

const images = [
    { id:1, name:"king", src:king },
    { id:2, name:"knight", src:knight },
    { id:3, name:"rook", src:rook }
]

const mapImages = images.map((x) => {
    return(
        <> 
            <Image key={x.id} src={x.src} id={x.id} /> 
        </>
    )
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
            setBoard((board) => [...board, imagesList[0]])
        // Replace Elements
            // setBoard([imagesList[0]])
    }

    const mapBoard = board.map((x, key) =>{
        return(
            <>
                <Image key={x.id} src={x.src} id={x.id} />
            </>
        )
    })

    return (
        <>
            <div className='thingsToDrag'> {mapImages} </div>

            <div className='placeToDrop' ref={drop}>{mapBoard}</div>
        </>
    )
}
