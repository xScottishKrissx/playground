import React from 'react'
import {DndProvider, useDrop, useDrag} from 'react-dnd'

function DragItem({id, text}) {
    const [{}, drag] = useDrag(()=>({
        type:"text",
        item:{id:id}
    }))
    return <p ref={drag}>{text}</p>
}

 
 export default function MapContent({itemsArray, boardName}) {
    return itemsArray.map((x,key) =>{
        if(x.board === boardName){
            return(
                <DragItem id={x.id} key={key} text={x.text}/>
            )
        }
    })
 }
 