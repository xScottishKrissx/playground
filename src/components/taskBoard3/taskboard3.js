import React,{StrictMode, useState} from 'react'
// import data from './data'
import {v4 as uuidv4} from 'uuid'
import './taskboard3.css'

import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

import onDragEnd from './components/onDragEnd'

// This will become empty arrays so no need to clean this up
    const tasks = [
        {id:uuidv4(), content:'task-1 content'},
        {id:'task2', content:'task-2 content'},
        {id:'task4', content:'task-4 content'},
        {id:'task3', content:'task-3 content'},
    ];

    const columnData = 
    {
        [uuidv4()]: {
            name:"Unassigned",
            items: tasks
        },
        [uuidv4()]: {
            name:"Requested",
            items:[]
        }
    }

export default function Taskboard3() {
    // localStorage.clear()
    const grabLocalStorage = JSON.parse(localStorage.getItem("userData"))
    const [columns, setColumns] = useState(grabLocalStorage || columnData)
    
    if(columns !== grabLocalStorage){ localStorage.setItem("userData", JSON.stringify(columns)) }


    return (
        <div className='taskboardWrapper'>
            <DragDropContext onDragEnd={(result)=>onDragEnd(result, columns, setColumns)}>
            {/* {newThing} */}
            {Object.entries(columns).map(([id, column])=>{
                console.log(column)
                return(
                    <div style={{margin:8}} key={id}>
                    <h2>{column.name}</h2>
                    <Droppable droppableId={id} >
                       
                        {(provided, snapshot) =>{
                            return(
                                // Column
                                <div 
                                    ref={provided.innerRef} 
                                    {...provided.droppableProps} 
                                    style={{ 
                                        background: snapshot.isDragging ? 'lightblue' : 'lightgrey', 
                                        width:250, 
                                        minHeight:150,
                                        outline:"10px solid black"
                                    }}
                                >
                                    {/* Items */}
                                    {column.items.map((item, index) =>{
                                        return(
                                            <Draggable index={index} key={item.id} draggableId={item.id}>
                                                
                                                {(provided, snapshot) =>{
                                                    return(
                                                        <div 
                                                            ref={provided.innerRef} 
                                                            {...provided.draggableProps} 
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                userSelect:'none',
                                                                padding:16,
                                                                margin: "0 0 8px 0",
                                                                minHeight:"50px",
                                                                backgroundColor: snapshot.isDragging ? '#263B4A' : 'red',
                                                                color:"white",
                                                                outline:"10px solid yellow",
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
                                    {provided.placeholder}
                                </div>
                            )
                        }}
                    </Droppable>
                    </div>
                )
            })}

            </DragDropContext>
        </div>
    )
}


