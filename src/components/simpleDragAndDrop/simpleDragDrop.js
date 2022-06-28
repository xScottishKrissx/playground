import React from 'react'
import './simpleDragDrop.css'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {TouchBackend} from 'react-dnd-touch-backend'
import DragDrop from './components/dragDrop'


export default function SimpleDragDrop() {
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

  return (
      <DndProvider backend={HTML5Backend} options={opts}>
            <div className='simpleDragDrop__wrapper'>
              <h2 className='text-center mb-3 w-100'>Simple Drag and Drop</h2>
              <DragDrop />
            </div>
      </DndProvider>
    
  )
}

