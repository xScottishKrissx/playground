import React,{useEffect} from 'react'
import './taskBoard.css'
import {DndProvider, useDrop, useDrag} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {TouchBackend} from 'react-dnd-touch-backend'
// import DragDrop from './components/dragDrop'

import { useState, useRef } from 'react'
import AddItem from './components/addItem'
import Board from './components/board'

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

  const formInput = useRef()
  // Temporary while i figure out the structure
  const tasksArray = [
    {id:"item-1", text:"text-1"},
    {id:"item-2", text:"text-2"},
    {id:"item-3", text:"text-3"}
  ]

  let tasks = [] || tasksArray
  const [isTask, setIsTask] = useState(tasks)
  const addItem = () =>{
    const formValue = formInput.current.value
    if(formValue.length > 1){
      let itemsArray = isTask || []
      itemsArray.push({'id':"item-" + (isTask.length + 1) , 'text': formValue})
      setIsTask(isTask => ([...isTask]))
    }
    console.log(isTask)
  }

  const editItems = (item) =>{
    // console.log("Edit Item")
    // console.log(item)
    let currentTasks = isTask || []
    let updateTasks = currentTasks.filter(x => x.id !== item)
    // console.log(updateTasks)
    // setIsTask(updateTasks)
  }



  return (
      <DndProvider backend={HTML5Backend} options={opts}>
            <div className='taskBoard__wrapper'>
              <h2 className='text-center mb-3 w-100'>Simple Drag and Drop</h2>
              <div className='taskBoard__columnWrapper'>
                {/* <Board /> */}
                <Board tasks={isTask} editItems={editItems}/>
                <AddItem ref={formInput} addItem={addItem} />

              </div>
            </div>
      </DndProvider>
    
  )
}

