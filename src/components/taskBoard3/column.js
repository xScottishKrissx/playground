import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Task from './task'

export default function Column({column, tasks}) {

    const showTasks = tasks.map(task =>{
        return(
            <Task key={task.id} tasks={task} />
        )
    })

  return (
    <div className='columnWrapper'>
        <h3> {column.title} </h3>
        <div className='taskListContainer'>
            Task List
            
            
            {showTasks}
            
        </div>
    </div>
  )
}
