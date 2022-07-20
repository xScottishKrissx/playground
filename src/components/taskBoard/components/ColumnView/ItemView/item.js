import React from 'react'
import { Draggable} from 'react-beautiful-dnd'

import './item.css'

export default function ItemView({column, markAsDone, columnId}) {

    const restColour = "white"
    const draggingColour ="#4eff5361"

    const doneColour = "green"
    



    return (
        <div className='itemWrapper'>
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
                                        backgroundColor: item.status === "done" ? doneColour : restColour,
                                        // Important for dragging preview, don't remove
                                        ...provided.draggableProps.style
                                    }}

                                    >
                                        <span id="itemContent">{item.content}</span>
                                        {item.status === "open" ? 
                                        <span onClick={()=>markAsDone(item.id, columnId, "done")} title="Mark as Done" className="material-icons-outlined itemCheck">radio_button_unchecked</span>
                                        :
                                        <span onClick={()=>markAsDone(item.id, columnId, "open")} title="Mark as Done" className="material-icons-outlined itemCheck">check_circle_outline</span>
                                        
                                    }
                                    </div>
                            )
                        }}
                    </Draggable>
                )
            })}
        </div>
    )
}
