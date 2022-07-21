import React from 'react'
import {Droppable, Draggable} from 'react-beautiful-dnd'
import ItemView from './ItemView/item'

import './column.css'
import UserInput from '../UserInput/userInput'
import ColumnHeader from './ColumnHeader/columnHeader'


export default function ColumnView({columns, handleAddNewItem, handleResetBoard, handleDeleteColumn, markAsDone,addDescription}) {

    const restColour = "#d6d6d6"
    const colourOnHoverOver ="#38e35d17"

    return (
        <>
           
            {Object.entries(columns).map(([id, column], index) => {
                return(
                    <Draggable draggableId={id} index={index} key={id}>
                        {(provided) =>(
                            <div className='column' key={id} ref={provided.innerRef} {...provided.draggableProps}>
    {/* Column Header */}
                                <ColumnHeader 
                                    provided={provided} 
                                    column={column} 
                                    id={id} 
                                    confirmDelete={handleDeleteColumn} 
                                    confirmResetBoard={handleResetBoard}
                                />

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
                                                <ItemView 
                                                    column={column} 
                                                    markAsDone={markAsDone} 
                                                    columnId={id} 
                                                    addDescription={addDescription}
                                                    
                                                    />
                                                {provided.placeholder}

                                                {/* {snapshot.isDraggingOver ? null  :  */}
                                                    <UserInput 
                                                        columns={columns} 
                                                        columnId={id} 
                                                        handleAddNewItem={handleAddNewItem} 
                                                        instruction="item"
                                                        
                                                    />
                                               {/* // } */}

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
