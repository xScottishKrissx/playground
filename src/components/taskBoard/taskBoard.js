import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd'

import './taskboard.css'

import onDragEnd from './components/onDragEnd'
import ColumnView from './components/ColumnView/column'
import UserInput from './components/UserInput/userInput'
import TaskboardHeader from './components/TaskboardHeader/taskboardHeader'

import updateTitle from './utils/updateTitle'
import addNewItem from './utils/addNewItem'
import addNewBoard from './utils/addNewBoard'
import addDescription from './utils/addDescription'
import resetBoard from './utils/resetBoard'
import deleteColumn from './utils/deleteColumn'
import markAsDone from './utils/markAsDone'
import deleteItem from './utils/deleteItem'

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
    console.log(columns)
    if(columns !== grabLocalStorage){ localStorage.setItem("userData", JSON.stringify(columns)) }


    const doAddNewItem = (id, formValue) => addNewItem(id, formValue, columns, setColumns, uuidv4())
    const doAddNewBoard = (formValue) =>addNewBoard(formValue, columns, setColumns, uuidv4())
    const doAddDescription = (formValue, columnId, itemId) => addDescription(formValue, columnId, itemId, columns, setColumns) 

    const doDeleteColumn = (columnToDeleteId) => deleteColumn(columnToDeleteId, columns, setColumns) 
    const doDeleteItem = (itemId, columnId) => deleteItem(itemId, columnId, columns, setColumns) 
    const doResetBoard = (columnId) => resetBoard(columnId, columns, setColumns) 

    const doMarkAsDone = (itemId, columnId, setStatus) => markAsDone(itemId, columnId, setStatus, columns, setColumns) 
    const doUpdateTitle = (formValue, columnId, itemId, ) => updateTitle(formValue, columnId, itemId, columns, setColumns)

    return (
        <div className='taskboardWrapper'>

                <TaskboardHeader resetBoard={()=>setColumns(columnData)}/>

                <div className='columnsContainer'>

                <DragDropContext onDragEnd={(result)=>onDragEnd(result, columns, setColumns)}>
                    <Droppable droppableId='allColumns' direction='horizontal' type="column" >
                        {(provided) =>(
                            <div className='allColumns' ref={provided.innerRef}  {...provided.droppableProps}  >                        
                                <ColumnView 
                                    columns={columns} 
                                    handleAddNewItem={doAddNewItem}  
                                    handleResetBoard={doResetBoard} 
                                    handleDeleteColumn={doDeleteColumn}
                                    markAsDone={doMarkAsDone}
                                    addDescription={doAddDescription}
                                    updateTitle={doUpdateTitle}
                                    handleDeleteItem={doDeleteItem}
                                    />
                                {provided.placeholder}
                            </div>
                        )}

                    </Droppable>

                    <UserInput columns={columns} handleAddNewItem={doAddNewBoard} instruction="board" />
                </DragDropContext>

            </div>
        </div>
    )
}