import React from 'react'
import {Droppable} from 'react-beautiful-dnd'
import ItemView from './ItemView/item'

import './column.css'
import UserInput from '../UserInput/userInput'

export default function ColumnView({columns, handleAddNewItem}) {

    const restColour = "orange"
    const colourOnHoverOver ="yellow"

    return (
        <>
            {Object.entries(columns).map(([id, column]) => {
                return(
                    <div className='column' key={id}>
{/* Column Header */}
                        <h2>{column.name}</h2>

                        <Droppable droppableId={id} >
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
                                        <UserInput columns={columns} handleAddNewItem={handleAddNewItem} columnId={id} instruction="newItem"/>

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
