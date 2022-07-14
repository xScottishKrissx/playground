import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import { DragDropContext} from 'react-beautiful-dnd'

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
            name:"Unassigned",
            items: tasks
        },
        [uuidv4()]: {
            name:"Requested",
            items:[]
        }
    }

export default function Taskboard() {
    // localStorage.clear()
    const grabLocalStorage = JSON.parse(localStorage.getItem("userData"))
    const [columns, setColumns] = useState(grabLocalStorage || columnData)
    
    if(columns !== grabLocalStorage){ localStorage.setItem("userData", JSON.stringify(columns)) }

    return (
        <div className='taskboardWrapper'>
            <DragDropContext onDragEnd={(result)=>onDragEnd(result, columns, setColumns)}>
                <ColumnView columns={columns} />
                <UserInput columns={columns}/>
            </DragDropContext>
        </div>
    )
}