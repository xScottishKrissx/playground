import React,{StrictMode, useState} from 'react'
// import data from './data'
import {v4 as uuidv4} from 'uuid'
import './taskboard3.css'

import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const tasks = [

    {id:'task1', content:'task-1 content'},
    {id:'task2', content:'task-2 content'},
    {id:'task4', content:'task-4 content'},
    {id:'task3', content:'task-3 content'},
    

];

const columnData = 
{
    [uuidv4()]: {
        name:"Todo",
        items: tasks
    },
    [uuidv4()]: {
        name:"progress",
        items:[]
    }
}


export default function Taskboard3() {
    
    const grabLocalStorage = JSON.parse(localStorage.getItem("userData"))
    const [columns, setColumns] = useState(grabLocalStorage || [] || columnData)
    if(columns !== grabLocalStorage){ localStorage.setItem("userData", JSON.stringify(columns)) }

    const onDropEnd = (result, columns, setColumns) =>{
        if(!result.destination) return;
        const {source, destination} = result
        if(source.droppableId !== destination.droppableId){
            // Move to New Column
            const sourceColumn = columns[source.droppableId]
            const destColumn = columns[destination.droppableId]

            const sourceItems = [...sourceColumn.items]
            const destItems = [...destColumn.items]

            const [removed] = sourceItems.splice(source.index, 1)
            destItems.splice(destination.index, 0, removed)

            setColumns({
                ...columns,
                [source.droppableId]:{
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]:{
                    ...destColumn,
                    items: destItems
                }
            })
            
        } else{
            // Reorder In Column
            const column = columns[source.droppableId]
            const copiedItems = [...column.items]
    
            const [removed] = copiedItems.splice(source.index, 1)
            copiedItems.splice(destination.index, 0, removed)
    
            setColumns({
                ...columns,
                [source.droppableId]:{
                    ...columns,
                    items:copiedItems
                }
            })
        }
    }

    return (
        <div className='taskboardWrapper'>
            <DragDropContext onDragEnd={(result)=>onDropEnd(result, columns, setColumns)}>
            {/* {newThing} */}
            {Object.entries(columns).map(([id, column])=>{
                return(
                    <div style={{margin:8}} key={id}>
                    <h2>{column.name}</h2>
                    <Droppable droppableId={id} >
                       
                        {(provided, snapshot) =>{
                            return(
                                <div 
                                    ref={provided.innerRef} 
                                    {...provided.droppableProps} 
                                    style={{ 
                                        background: snapshot.isDragging ? 'lightblue' : 'lightgrey', 
                                        width:250, 
                                        minHeight:150
                                    }}
                                >
                                    
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


