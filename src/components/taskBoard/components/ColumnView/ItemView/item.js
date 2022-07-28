import React,{useState} from 'react'
import { Draggable} from 'react-beautiful-dnd'

import './item.css'
import ItemStatus from './utilityComponents/itemStatus'
import ItemWindow from './ItemWindow/itemWindow'

export default function ItemView({column, markAsDone, columnId, addDescription, updateTitle, handleDeleteItem}) {
    
    const restColour = "white"
    const draggingColour ="#4eff5361"
    const doneColour = "rgb(136 221 0)"
    
    const [itemWindowState, setItemWindowState] = useState({
        open:false,
        itemId:"",
    })
    
    const toggleItemWindow = (itemId, toggleStatus, setDrag) =>{
        setItemWindowState({open:toggleStatus, itemId:itemId, disableDrag:setDrag})
    }

    return (
        <div className='itemWrapper' >
            {column.items.map((item, index) =>{
                const hasDescriptionStyle = item.description.length > 1 ? "hasDescription" : "emptyDescription"
                return(
                    <Draggable  index={index} key={item.id} draggableId={item.id}  >
                        
                        {(provided, snapshot) =>{
                            return(
                            <>
                                <div 
                                className="item"                                    
                                ref={provided.innerRef} 
                                {...provided.draggableProps} 
                                {...provided.dragHandleProps} 
                                style={{
                                    
                                    backgroundColor: 
                                    snapshot.isDragging ? draggingColour : null || 
                                    item.status === "done" ? doneColour : restColour,
                                    // Important for dragging preview, don't remove
                                    ...provided.draggableProps.style,
                                    
                                    
                                }}
                                >
                                        <div id="itemContent" onClick={()=>toggleItemWindow(item.id, true, true)} > {item.content} </div>
                                        
                                        <span 
                                            alt="Open Description" 
                                            title="Open Description" 
                                            onClick={()=>toggleItemWindow(item.id, true, true)} 
                                            className={"material-symbols-outlined openDescriptionButton " + hasDescriptionStyle}>article
                                        </span>
                                        
                                        <ItemStatus itemStatus={item.status} itemId={item.id} columnId={columnId} markAsDone={markAsDone}/>

                                </div>

                                <ItemWindow 
                                    addDescription={addDescription}
                                    closeItemWindow={()=>toggleItemWindow(null,false, false)}
                                    closeWindow={true}
                                    columnId={columnId}
                                    handleDeleteItem={handleDeleteItem}
                                    item={item}
                                    itemWindowState={itemWindowState} 
                                    markAsDone={markAsDone}
                                    updateTitle={updateTitle}
                                />
                            </>
                            )
                        }}
                    </Draggable>
                )
            })}
        </div>
    )
}
