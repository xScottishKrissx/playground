import React from 'react'
import { Draggable} from 'react-beautiful-dnd'

import './item.css'

export default function ItemView({column}) {

    const restColour = "black"
    const draggingColour ="blue"

    return (
        <>
            {column.items.map((item, index) =>{
                return(
                    <Draggable index={index} key={item.id} draggableId={item.id}>
                        
                        {(provided, snapshot) =>{
                            return(
                                <div 
                                    className="item"                                    
                                    // React-Beautiful-DND
                                    ref={provided.innerRef} 
                                    {...provided.draggableProps} 
                                    {...provided.dragHandleProps} 
                                    style={{
                                        backgroundColor: snapshot.isDragging ? draggingColour : restColour,
                                        // Important for dragging preview, don't remove
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
