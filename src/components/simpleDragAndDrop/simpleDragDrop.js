import React from 'react'
import './simpleDragDrop.css'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import DragDrop from './components/dragDrop'



export default function SimpleDragDrop() {
  return (
      <DndProvider backend={HTML5Backend}>
            <div className='simpleDragDrop__wrapper'>
              <DragDrop />
            </div>
      </DndProvider>
    
  )
}

