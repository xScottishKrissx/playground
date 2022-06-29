import React from 'react'

import { useDrag } from 'react-dnd'

export default function Tasks(props) {

    // const mapCurrentTasks = props.currentTasks.map(x =>{
    //     return <p>{x.text}</p>
    // })

    const [{isDragging}, drag] = useDrag(()=>({
      type:"text",
      item:{id:props.id}
    }))
    // console.log(props.thing)

    return(
      <div ref={drag}><p>{props.content}{props.id}</p></div>
    )
    // return (
        
    // )
}
