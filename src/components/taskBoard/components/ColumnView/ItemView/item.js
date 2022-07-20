import React,{useState} from 'react'
import { Draggable} from 'react-beautiful-dnd'

import './item.css'
import ItemWindow from './ItemWindow/itemWindow'

export default function ItemView({column, markAsDone, columnId, addDescription}) {

    const restColour = "white"
    const draggingColour ="#4eff5361"

    const doneColour = "green"
    

    const [itemWindowState, setItemWindowState] = useState({
        open:true,
        itemId:""
    })

    const toggleItemWindow = (itemId, toggleStatus) =>{
        setItemWindowState({open:toggleStatus, itemId:itemId})
    }


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
                                        backgroundColor: 
                                            snapshot.isDragging ? draggingColour : null || 
                                            item.status === "done" ? doneColour : restColour,
                                        // Important for dragging preview, don't remove
                                        ...provided.draggableProps.style
                                    }}

                                    >
                                        <span id="itemContent" onClick={()=>toggleItemWindow(item.id, true)} >
                                                {item.content}
                                        </span>

                                        {/* {isItemOpen ?  : null} */}

                                        <ItemWindow 
                                            itemWindowState={itemWindowState} 
                                            item={item}
                                            closeItemWindow={()=>toggleItemWindow(false)}
                                            addDescription={addDescription}
                                            columnId={columnId}
                                        />

                                        {item.status === "open" ? 
                                            <span onClick={()=>markAsDone(item.id, columnId, "done")} title="Mark as Done" className="material-icons-outlined itemCheck">radio_button_unchecked</span>
                                        :
                                            <span onClick={()=>markAsDone(item.id, columnId, "open")} title="Mark as Open" className="material-icons-outlined itemCheck">check_circle_outline</span>
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
