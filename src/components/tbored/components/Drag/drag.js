import React from 'react'
import {useDrag} from 'react-dnd'

function DragItem({id, text, test}) {
    const [{isDragging}, drag] = useDrag(()=>({
        type:"text",
        item:{id:id},
        collect: (monitor) =>({
            isDragging: monitor.isDragging(),
        }),
    }))
    return <p ref={drag}>{text}</p>
}


export default function MapContent({itemsArray, boardName}) {

    return itemsArray.map((x,key) =>{
        if(x.board === boardName){
            return(
                <DragItem test={itemsArray} id={x.id} key={key} text={x.text}/>
            )
        }
    })
    
 }
 