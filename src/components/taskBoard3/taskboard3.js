import React,{StrictMode, useState} from 'react'
import data from './data'
import './taskboard3.css'

import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const columnData =  {
    "items":{
        name:"Todo",
        items:data
    },
    "progress":{
        name:"Progress",
        items:[]
    }
}



export default function Taskboard3() {
    console.log(columnData.items.items)
    const [columns, setColumns] = useState(columnData)
    // const [items, setItems] = useState(columnData.items.items)
    
    function handleOnDragEnd(result, columns){
        // console.log(result)
        if(!result.destination) return
        const column = columns[result.source.droppableId]
        const copyOfItems = [...column.items]
    
        const [removed] = copyOfItems.splice(result.source.index, 1)
        copyOfItems.splice(result.destination.index, 0, removed)

        setColumns({
            ...columns,
            [result.source.droppableId]:{
                ...column,
                items: copyOfItems
            }
        })
    }

    
    const mapData = columns.items.items.map(({id, content}, index) =>{
        return(
            <Draggable key={id} draggableId={id} index={index}>
                {(provided)=>(
                    <p {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={{...provided.draggableProps.style}}>
                        {content}
                    </p>
                )}
            </Draggable >
        )
    })

    // function MapColumn ({column}){
    //     console.log(column)
    //     const mapThing = column.items.map(({id, content}, index) =>{
    //         return(
    //             <Draggable key={id} draggableId={id} index={index}>
    //                 {(provided)=>(
    //                     <p {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={{...provided.draggableProps.style}}>
    //                         {content}
    //                     </p>
    //                 )}
    //             </Draggable >
    //         )
    //     })
    //     return mapThing
    // }

    
  return (
    <div className='taskboard3Wrapper'>
        <DragDropContext onDragEnd={(x) => handleOnDragEnd(x, columns)}>
            {Object.entries(columns).map(([id, column])=>{
                return(
                    <div key={id}>

                    <h3>{column.name}</h3>
                    <Droppable droppableId='items' key={id}>
                        {(provided,snapshot)=>(
                            <div className='items' {...provided.droppableProps} ref={provided.innerRef} 
                            style={{background: snapshot.isDraggingOver ? 'lightblue' : "white", width:250, minHeight:250}}>
                                {mapData}
                                {/* <MapColumn column={column}/> */}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    </div>

                )
            })}


        </DragDropContext>
    </div>

    
  )
}
