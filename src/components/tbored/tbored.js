import React,{useState} from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
// import {TouchBackend} from 'react-dnd-touch-backend'
import Board from './components/Drop/drop'
import UserInput from './components/userInput/userInput'

import './tboard.css'

export default function Tbored(){

    // local storage
    // localStorage.clear()
    const storedItems = JSON.parse(localStorage.getItem("tbored-items")) || []
    const counterLocalStorage = JSON.parse(localStorage.getItem("counter")) + 1 || 0

    // ref
    // const myForm = useRef()

    // state
    const [items, setItems ] = useState(storedItems)
    const [counter, setCounter] = useState(counterLocalStorage)


    // Utilities
    const setItemState = (newItems) => { setItems(newItems) }
    const setLocalStorage = (name,thingToStore) => { localStorage.setItem(name, JSON.stringify(thingToStore)) }

  return (
    <DndProvider backend={HTML5Backend}>
        <div>
            <h3>Tbored</h3>
            <UserInput 
                items={items} 
                setItems={setItemState} 
                setLocalStorage={setLocalStorage}
                counter={counter} 
                setCounter={()=>setCounter(counter + 1)} 
            />

            <Board 
                items={items} 
                setItems={setItemState} 
                setLocalStorage={setLocalStorage}
            />

        </div>
    </DndProvider>
  )
}
