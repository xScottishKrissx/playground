import React,{useState, useRef} from 'react'

import {DndProvider, useDrop, useDrag} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {TouchBackend} from 'react-dnd-touch-backend'
import Counter from '../counter/counter'

import './tboard.css'

export default function Tbored() {

    // local storage
    // localStorage.clear()
    const storedItems = JSON.parse(localStorage.getItem("tbored-items")) || []
    const counterLocalStorage = JSON.parse(localStorage.getItem("counter")) + 1 || 0
    console.log(storedItems)
    // ref
    const myForm = useRef()

    // state
    const [items, setItems ] = useState(storedItems)
    const [counter, setCounter] = useState(counterLocalStorage)

    const addNew = () =>{
        const formValue = myForm.current.value
        console.log(formValue)

        if(formValue.length > 1){
            let itemsArray = items || []
            itemsArray.push({
                "id": "item" + counter.toString() ,
                "text": formValue 
            })
            setItems(itemsArray)
            setLocalStorage("tbored-items", JSON.stringify(items))
        }
        setCounter(counter + 1)
        localStorage.setItem("counter", JSON.stringify(counter))
        console.log(items)


        // Clear Input After Saving
        myForm.current.value = ""
    }



    const setLocalStorage = (name,thingToStore) => {localStorage.setItem(name, JSON.stringify(thingToStore))}
    const resetBoard = () =>{
        console.log("Clearing Local Storage, reload page")
        localStorage.clear()
    }

  return (
    <DndProvider backend={HTML5Backend}>
        <div>
            <h3>Tbored</h3>
            <button onClick={addNew}>Add</button>
            <button onClick={resetBoard}>Reset</button>

            <form>
                <input ref={myForm} />
            </form>
        </div>
    </DndProvider>
  )
}
