import React from 'react'

import { useDrag } from 'react-dnd'

export default function Image({src, url, name, id, }) {

    const [{isDragging}, drag] = useDrag(()=>({
        type:"image",
        item:{id: id},
        collect: (monitor) =>({
            isDragging: monitor.isDragging()
        }),
    }))

    


    return <img 
        ref={drag}
        src={src} 
        alt="shut up es lint" 
        style={{border: isDragging ? "2px solid yellow" : "0px"}}
    />


}

