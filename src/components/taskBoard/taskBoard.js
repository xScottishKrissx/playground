import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'

import './taskboard.css'

import onDragEnd from './components/onDragEnd'
import ColumnView from './components/ColumnView/column'
import UserInput from './components/UserInput/userInput'
import TaskboardHeader from './components/TaskboardHeader/taskboardHeader'

// Columns

// Items
const tasks = [
    {id:uuidv4(), content:'Item 1', description:"This is an item, it has a description and is marked as done. You can mark this item as done/open by hitting the check mark icon(bottom middle). You can delete this item by hitting the bin icon(bottom left) and the floppy disk(bottom right) will close the window." , status:"done"},
    {id:uuidv4(), content:'Item B', description:"" ,  status:"open"},
    {id:uuidv4(), content:'Task III', description:"" ,  status:"open"},
    {id:uuidv4(), content:'Reminder Four', description:"" ,  status:"open"},
];

    const columnData = { [uuidv4()]: { name:"First Board", items: tasks, } }

export default function Taskboard() {
    const grabLocalStorage = JSON.parse(localStorage.getItem("userData"))
    const [columns, setColumns] = useState(grabLocalStorage || columnData)

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
        const objectToUpdate = columns[columnId]

        if(columnId && !itemId) {
            // Change Board Title
            objectToUpdate.name = formValue
            setColumns({ ...columns,  [columnId]:{ ...objectToUpdate } })
            return
        }else{
            // Change Item Title
            const updateItem = objectToUpdate.items.map(item =>{
                if(item.id === itemId){ item.content = formValue } return item
            })
            setColumns({ ...columns,  [columnId]:{ ...objectToUpdate, items:updateItem } })
            return
        }        
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