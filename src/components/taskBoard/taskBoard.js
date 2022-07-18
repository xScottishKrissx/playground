import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'

import './taskboard.css'

import onDragEnd from './components/onDragEnd'
import ColumnView from './components/ColumnView/column'
import UserInput from './components/UserInput/userInput'

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
            name:"One",
            items: tasks,
            position:1
        },
        [uuidv4()]: {
            name:"Two",
            items:[],
            position:2
        }
    }

export default function Taskboard() {
    // localStorage.clear()
    const grabLocalStorage = JSON.parse(localStorage.getItem("userData"))
    const [columns, setColumns] = useState(grabLocalStorage || columnData)
    console.log(columns)
    if(columns !== grabLocalStorage){ localStorage.setItem("userData", JSON.stringify(columns)) }

    const handleAddNewItem = (id, formValue) => {
        // console.log(columns[id].items)
        const currentFirstColumnItems = columns[id].items
        const addNewItemToCurrentFistColItems = [...currentFirstColumnItems].concat({'id': uuidv4() , 'content': formValue})
        const objectToUpdate = columns[id]
        setColumns({ ...columns, [id]:{ ...objectToUpdate, items:addNewItemToCurrentFistColItems } })
    }

    const handleAddNewBoard = (formValue) =>{
        console.log("New Board !")
        const newBoard = {[uuidv4()]:{ name:formValue, items:[] , position:columns.length + 1}}
        const currentBoard = {...columns, ...newBoard}
        setColumns(currentBoard)
    }
    
    const handleResetBoard = (columnId) =>{
        // console.log("Reset Board" + columnId)
        const objectToUpdate = columns[columnId]
        setColumns({ ...columns, [columnId] : {...objectToUpdate, items:[]} })
    }
    

    return (
        <div className='taskboardWrapper'>
            <DragDropContext onDragEnd={(result)=>onDragEnd(result, columns, setColumns)}>

                <Droppable droppableId='allColumns' direction='horizontal' type="column" >
                    {(provided) =>(
                        <div className='allColumns' ref={provided.innerRef}  {...provided.droppableProps}  >                        
                            <ColumnView columns={columns} handleAddNewItem={handleAddNewItem}  handleResetBoard={handleResetBoard}/>
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>


                <UserInput columns={columns} handleAddNewItem={handleAddNewBoard} instruction="board" />
            </DragDropContext>
        </div>
    )
}