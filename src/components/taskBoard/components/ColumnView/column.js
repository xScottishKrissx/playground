import React from 'react'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import ItemView from './ItemView/item'

import './column.css'
import UserInput from '../UserInput/userInput'

export default function ColumnView({columns, handleAddNewItem, handleResetBoard}) {

    const restColour = "orange"
    const colourOnHoverOver ="yellow"
    // console.log(columns)

    return (
        <>
            {Object.entries(columns).map(([id, column], index) => {
                return(
                    <Draggable draggableId={id} index={index} key={id}>
                        {(provided) =>(
                            <div className='column' key={id} ref={provided.innerRef} {...provided.draggableProps}>
    {/* Column Header */}
                                <h2 {...provided.dragHandleProps}>{column.name}</h2>

                                <Droppable droppableId={id} type="tasks">
                                    {(provided, snapshot) =>{
                                        return(
                                            // Column
                                            <div 
                                            className='columnDropArea'
                                                ref={provided.innerRef} 
                                                {...provided.droppableProps} 
                                                style={{ 
                                                    background: snapshot.isDraggingOver ? colourOnHoverOver : restColour, 
                                                }}
                                            >
                                                <ItemView column={column}/>
                                                {provided.placeholder}
                                                <UserInput 
                                                    columns={columns} 
                                                    columnId={id} 
                                                    handleAddNewItem={handleAddNewItem} 
                                                    handleResetBoard={handleResetBoard}
                                                    instruction="item"
                                                    />

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
