import React,{useState, useRef} from 'react'
import { Draggable} from 'react-beautiful-dnd'

import './item.css'
import ItemStatus from './utilityComponents/itemStatus'
import ItemWindow from './ItemWindow/itemWindow'

export default function ItemView({column, markAsDone, columnId, addDescription, updateTitle, handleDeleteItem}) {
    
    const restColour = "white"
    const draggingColour ="#4eff5361"
    const doneColour = "green"
    
    const [itemWindowState, setItemWindowState] = useState({
        open:false,
        itemId:"",
        disableDrag:false
    })
    
    const toggleItemWindow = (itemId, toggleStatus, setDrag) =>{
        setItemWindowState({open:toggleStatus, itemId:itemId, disableDrag:setDrag})
    }

    return (
        <div className='itemWrapper' >
            {column.items.map((item, index) =>{
                return(
                    <Draggable  index={index} key={item.id} draggableId={item.id} isDragDisabled={itemWindowState.disableDrag} >
                        
                        {(provided, snapshot) =>{
                            return(
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
                                            className="material-icons-outlined openDescriptionButton">
                                                description
                                        </span>

                                        <ItemStatus itemStatus={item.status} itemId={item.id} columnId={columnId} markAsDone={markAsDone}/>

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
                                        
                                        

                          
                                </div>
                            )
                        }}
                    </Draggable>
                )
            })}
        </div>
    )
}
