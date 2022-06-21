import React from 'react'
import './chessTutorial.css'
import Board from './components/board'
import Knight from './components/knight'
import Square from './components/square'

export default function ChessTutorial() {
  return (
    <div className='chessTutorial__wrapper'>
        <Board knightPosition={[7,2]}/>
    </div>
  )
}
