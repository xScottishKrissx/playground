import React from 'react'
import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

export default function ItemView({column}) {
  return (
    <>
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
    </>
  )
}
