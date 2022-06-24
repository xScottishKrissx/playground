import React from 'react'

import { useDrag } from 'react-dnd'

export default function Image({src, url, name, id, }) {

    const [{isDragging, setCursor}, drag] = useDrag(()=>({
        type:"image",
        item:{id: id},
        collect: (monitor) =>({
            isDragging: monitor.isDragging(),
            setCursor: monitor.isDragging() ? "grabbing " : "pointer"
        }),
    }))

    


    return <img 
        ref={drag}
        src={src} 
        alt={name + " chess piece" }
        style={{
            border: isDragging ? "2px solid yellow" : "0px",
            cursor: setCursor
        }}
    />


}

