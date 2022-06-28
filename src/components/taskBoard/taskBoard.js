import React from 'react'
import './taskBoard.css'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {TouchBackend} from 'react-dnd-touch-backend'
// import DragDrop from './components/dragDrop'

import { useDrag } from 'react-dnd'

export default function TaskBoard() {
  const opts = {
    enableTouchEvents:true,
    enableMouseEvents:true
  }

  let deviceCheck;
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    deviceCheck = TouchBackend
  }else{
    deviceCheck = HTML5Backend
  }

  // Thing to Drag

  
  const Task = (id) =>{
    const [{isDragging}, drag] = useDrag(()=>({
      type:"text",
      item:{id:id}
    }))

    return(
      <div ref={drag}><p>Item To Drag</p></div>
    )
  }







  return (
      <DndProvider backend={HTML5Backend} options={opts}>
            <div className='taskBoard__wrapper'>
              <h2 className='text-center mb-3 w-100'>Simple Drag and Drop</h2>
              <div className='taskBoard__columnWrapper'>
                <div className='taskBoard__column'>Tasks
                  <Task id="test"/>
                  <Task id="test2"/>
                  <Task id="test3"/>
                </div>
                <div className='taskBoard__column'>In Progress</div>
                <div className='taskBoard__column'>Completed</div>
              </div>
            </div>
      </DndProvider>
    
  )
}

