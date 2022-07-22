import React,{useState, useRef} from 'react'
import { Draggable} from 'react-beautiful-dnd'

import './item.css'
import ItemWindow from './ItemWindow/itemWindow'

export default function ItemView({column, markAsDone, columnId, addDescription, updateTitle}) {
    
    const restColour = "white"
    const draggingColour ="#4eff5361"

    const doneColour = "green"
    

    const [itemWindowState, setItemWindowState] = useState({
        open:false,
        itemId:"",
        disableDrag:false
    })

    const [overwriteItemWindow, setOverwrite] = useState(false)

    
    
    const toggleItemWindow = (itemId, toggleStatus, setDrag) =>{
        setItemWindowState({open:toggleStatus, itemId:itemId, disableDrag:setDrag})
    }

    const closeWindow = () =>{
        console.log("Close Window")
        setOverwrite(true)
    }


    return (
        <div className='itemWrapper' >
            {column.items.map((item, index) =>{
                
              
                
                return(
                    <Draggable  index={index} key={item.id} draggableId={item.id} isDragDisabled={itemWindowState.disableDrag} >
                        
                        {(provided, snapshot) =>{
                            return(
                                <div 
                                // onDrag={} 
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
                                    ...provided.draggableProps.style,
                                    
                                    
                                }}
                                
                                >
                                        <span 
                                            id="itemContent" 
                                           
                                            onClick={()=>toggleItemWindow(item.id, true, true)} 
                                        >
                                                {item.content}
                                        </span>

                                        

                                        
                                        

                                          
                                        
                                        <ItemWindow 
                                        itemWindowState={itemWindowState} 
                                        item={item}
                                        closeItemWindow={()=>toggleItemWindow(null,false, false)}
                                        addDescription={addDescription}
                                        updateTitle={updateTitle}
                                        columnId={columnId}
                                        closeWindow={true}
                                        
                                        
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
