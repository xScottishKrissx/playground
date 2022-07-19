import React from 'react'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import ItemView from './ItemView/item'

import './column.css'
import UserInput from '../UserInput/userInput'

export default function ColumnView({columns, handleAddNewItem, handleResetBoard, handleDeleteColumn}) {

    const restColour = "#d6d6d6"
    const colourOnHoverOver ="#38e35d17"
    // console.log(columns)

    return (
        <>
            {Object.entries(columns).map(([id, column], index) => {
                return(
                    <Draggable draggableId={id} index={index} key={id}>
                        {(provided) =>(
                            <div className='column' key={id} ref={provided.innerRef} {...provided.draggableProps}>
    {/* Column Header */}
                                <div className='columnHeader'>
                                    <h2 {...provided.dragHandleProps}>{column.name}</h2>
                                    <span title="Delete Board" alt="Delete Board" onClick={()=>handleDeleteColumn(id)}><span class="material-icons">delete</span></span>
                                    <span title='Clear Board' alt="Clear Board" onClick={()=>handleResetBoard(id)}><span class="material-icons">restart_alt</span></span>
                                </div>

                                <Droppable droppableId={id} type="tasks">
                                    {(provided, snapshot) =>{
                                        return(
                                            // Column
                                            <div 
                                            className='columnDropArea'
                                                ref={provided.innerRef} 
                                                {...provided.droppableProps} 
                                                style={{ 
                                                    cursor: snapshot.isDraggingOver ? "grabbing" : "grab" ,
                                                    backgroundColor: snapshot.isDraggingOver ? colourOnHoverOver : restColour,
                                                }}
                                            >
                                                <ItemView column={column} />
                                                {provided.placeholder}

                                                {snapshot.isDraggingOver ? 
                                                    null 
                                                    : 
                                                    
                                                        <UserInput 
                                                            columns={columns} 
                                                            columnId={id} 
                                                            handleAddNewItem={handleAddNewItem} 
                                                            instruction="item"
                                                        />
                                                    
                                                    }

                                            </div>
                                        )
                                    }}                                
                                </Droppable>

                        </div>
                        )}
                    </Draggable>
                )
            })}
        </>
    )
}
