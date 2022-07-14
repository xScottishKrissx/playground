import React from 'react'
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

export default function ColumnView({columns}) {
  return (
    <>
    {Object.entries(columns).map(([id, column])=>{
                return(
                    <div style={{margin:8}} key={id}>
                    <h2>{column.name}</h2>
                    <Droppable droppableId={id} >
                       
                        {(provided, snapshot) =>{
                            return(
                                // Column
                                <div 
                                    ref={provided.innerRef} 
                                    {...provided.droppableProps} 
                                    style={{ 
                                        background: snapshot.isDragging ? 'lightblue' : 'lightgrey', 
                                        width:250, 
                                        minHeight:150,
                                        outline:"10px solid black"
                                    }}
                                >
                                    {/* Items */}
                                    {column.items.map((item, index) =>{
                                        return(
                                            <Draggable index={index} key={item.id} draggableId={item.id}>
                                                
                                                {(provided, snapshot) =>{
                                                    return(
                                                        <div 
                                                            ref={provided.innerRef} 
                                                            {...provided.draggableProps} 
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                userSelect:'none',
                                                                padding:16,
                                                                margin: "0 0 8px 0",
                                                                minHeight:"50px",
                                                                backgroundColor: snapshot.isDragging ? '#263B4A' : 'red',
                                                                color:"white",
                                                                outline:"10px solid yellow",
                                                                ...provided.draggableProps.style
                                                            }}
                                                            >
                                                                {item.content}
                                                            </div>
                                                    )
                                                }}
                                            </Draggable>
                                        )
                                    })}
                                    {provided.placeholder}
                                </div>
                            )
                        }}
                    </Droppable>
                    </div>
                )
            })}
    </>
  )
}
