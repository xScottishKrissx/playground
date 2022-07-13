import React,{useState} from 'react'
import data from './data'
import './taskboard3.css'

import { DragDropContext} from 'react-beautiful-dnd'

import Column from './column'

export default function Taskboard3() {
    const [startingData, setStartingData] = useState(data || [])


    const test = startingData.columnOrder.map(x =>{
        const column = startingData.columns[x]
        const tasks = column.taskIds.map(taskId => startingData.tasks[taskId])
        return <Column key={column.id} column={column} tasks={tasks}/>
    })

    const onDragEnd = () =>{

    }

  return (
    <div className='taskboard3Wrapper'>
        <DragDropContext onDragEnd={onDragEnd} >
        {test}

        </DragDropContext>
    </div>
  )
}
