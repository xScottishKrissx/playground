import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'

import './taskboard.css'

import onDragEnd from './components/onDragEnd'
import ColumnView from './components/ColumnView/column'
import UserInput from './components/UserInput/userInput'
import TaskboardHeader from './components/TaskboardHeader/taskboardHeader'

// This will become empty arrays so no need to clean this up
    const tasks = [
        {id:uuidv4(), content:'task-1 content', description:"" , status:"open"},
        {id:'task2', content:'task-2 content', description:"" ,  status:"open"},
        {id:'task4', content:'task-4 content', description:"" ,  status:"open"},
        {id:'task3', content:'task-3 content', description:"" ,  status:"done"},
    ];

    const columnData = 
    {
        [uuidv4()]: {
            name:"One",
            items: tasks,
            
        },
        [uuidv4()]: {
            name:"Two",
            items:[],
            
        }
    }

export default function Taskboard() {
    // localStorage.clear()
    // localStorage.clear()
    const grabLocalStorage = JSON.parse(localStorage.getItem("userData"))
    const [columns, setColumns] = useState(grabLocalStorage || columnData)
    console.log(columns)
    if(columns !== grabLocalStorage){ localStorage.setItem("userData", JSON.stringify(columns)) }

    const handleAddNewItem = (id, formValue) => {
        // console.log(columns[id].items)
        const currentFirstColumnItems = columns[id].items
        const addNewItemToCurrentFistColItems = [...currentFirstColumnItems].concat({'id': uuidv4() , 'content': formValue, 'status':"open", 'description': ''})
        const objectToUpdate = columns[id]
        setColumns({ ...columns, [id]:{ ...objectToUpdate, items:addNewItemToCurrentFistColItems, } })
    }

    const handleAddNewBoard = (formValue) =>{
        console.log("New Board !")
        const newBoard = {[uuidv4()]:{ name:formValue, items:[] , position:columns.length + 1, }}
        const currentBoard = {...columns, ...newBoard}
        setColumns(currentBoard)
    }
    
    const handleResetBoard = (columnId) =>{
        // console.log("Reset Board" + columnId)
        const objectToUpdate = columns[columnId]
        setColumns({ ...columns, [columnId] : {...objectToUpdate, items:[]} })
    }

    const handleDeleteColumn = (columnToDeleteId) =>{
        // Convert to array
        const currentColumns = Object.entries(columns)
        // Filter for key
        const filterColumn = currentColumns.filter(column => column[0] !== columnToDeleteId)
        // Filter back to object
        const newColumns = Object.fromEntries(filterColumn)
        // set state...
        setColumns(newColumns)
    }

    const handleDeleteAll = () =>{
        setColumns(columnData)
    }

    const markAsDone = (itemId, columnId, setStatus) =>{
        const objectToUpdate = columns[columnId]

        const updateItem = objectToUpdate.items.map(item =>{
            if(item.id === itemId){ item.status = setStatus } return item
        })

        setColumns({ ...columns,  [columnId]:{ ...objectToUpdate, items:updateItem } })
        
    }

    const addDescription = (formValue, columnId, itemId) =>{
        const objectToUpdate = columns[columnId]

        const updateItem = objectToUpdate.items.map(item =>{
            if(item.id === itemId ){ item.description = formValue }
            return item
        })
        setColumns({ ...columns,  [columnId]:{ ...objectToUpdate, items:updateItem } })
    }

    const updateTitle = (formValue, columnId, itemId) =>{
        // console.log(formValue)
        const objectToUpdate = columns[columnId]
        
        const updateItem = objectToUpdate.items.map(item =>{
            if(item.id === itemId){ item.content = formValue } return item
        })

        setColumns({ ...columns,  [columnId]:{ ...objectToUpdate, items:updateItem } })
        
    }

    const handleDeleteItem = (itemId, columnId,) =>{
        const objectToUpdate = columns[columnId]
        const filterItems = objectToUpdate.items.filter(item => item.id !== itemId)
        setColumns({ ...columns,  [columnId]:{ ...objectToUpdate, items:filterItems } })
    }

    return (
        <div className='taskboardWrapper'>

                <TaskboardHeader resetBoard={handleDeleteAll}/>

                <div className='columnsContainer'>



                <DragDropContext onDragEnd={(result)=>onDragEnd(result, columns, setColumns)}>
                    <Droppable droppableId='allColumns' direction='horizontal' type="column" >
                        {(provided) =>(
                            <div className='allColumns' ref={provided.innerRef}  {...provided.droppableProps}  >                        
                                <ColumnView 
                                    columns={columns} 
                                    handleAddNewItem={handleAddNewItem}  
                                    handleResetBoard={handleResetBoard} 
                                    handleDeleteColumn={handleDeleteColumn}
                                    markAsDone={markAsDone}
                                    addDescription={addDescription}
                                    updateTitle={updateTitle}
                                    handleDeleteItem={handleDeleteItem}
                                    />
                                {provided.placeholder}
                            </div>
                        )}

                    </Droppable>


                    <UserInput columns={columns} handleAddNewItem={handleAddNewBoard} instruction="board" />
                </DragDropContext>

            </div>
        </div>
    )
}