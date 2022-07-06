import React,{useState, useRef} from 'react'

import {DndProvider, useDrop, useDrag} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import {TouchBackend} from 'react-dnd-touch-backend'
import Counter from '../counter/counter'
import MapContent from './components/Drag/drag'
import UserInput from './components/userInput/userInput'

import './tboard.css'

export default function Tbored() {

    // local storage
    // localStorage.clear()
    const storedItems = JSON.parse(localStorage.getItem("tbored-items")) || []
    const counterLocalStorage = JSON.parse(localStorage.getItem("counter")) + 1 || 0
    console.log(storedItems)

    // ref
    // const myForm = useRef()

    // state
    const [items, setItems ] = useState(storedItems)
    const [counter, setCounter] = useState(counterLocalStorage)
    // console.log(items)


    // Add From User Input
    // const addNew = () =>{
    //     const formValue = myForm.current.value

    //     if(formValue.length > 1){
    //         let itemsArray = items || []
    //         itemsArray.push({
    //             "id": "item" + counter.toString() ,
    //             "text": formValue,
    //             "board":"unassigned"
    //         })
    //         setItems(itemsArray)
    //         setLocalStorage("tbored-items", items)
    //     }
    //     setCounter(counter + 1)
    //     localStorage.setItem("counter", JSON.stringify(counter))
    //     // console.log(items)


    //     // Clear Input After Saving
    //     myForm.current.value = ""
    // }

    // Change Board with Drag And Drop
    const addToBoard = (itemId, newBoard) =>{
        let itemsCopy = [...items]
        const changeBoard = itemsCopy.map(x => {
            if( x.id === itemId ){ x.board = newBoard } return x
        })
        setItems(changeBoard)
        setLocalStorage("tbored-items", items)
    }



    const setLocalStorage = (name,thingToStore) => {localStorage.setItem(name, JSON.stringify(thingToStore))}
    // const resetBoard = () =>{
    //     console.log("Clearing Local Storage, reload page")
    //     localStorage.clear()
    // }

    // Displaying On Page
    // function MapContent({itemsArray, boardName}){
    //     return itemsArray.map((x,key) =>{
    //         if(x.board === boardName){
    //             return(
    //                 <DragItem id={x.id} key={key} text={x.text}/>
    //             )
    //         }
    //     })
    // }


    // Dragging
    // function DragItem({id, text}){
    //     const [{}, drag] = useDrag(()=>({
    //         type:"text",
    //         item:{id:id}
    //     }))
    //     return <p ref={drag}>{text}</p>
    // }

    // Dropping
    function DropItem(){

        const [{}, toInProgress] = useDrop(()=>({
            accept:"text",
            drop:(item) => addToBoard(item.id,"inProgress")
        }))

        const [{}, toUnassigned] = useDrop(()=>({
            accept:"text",
            drop:(item) => addToBoard(item.id,"unassigned")
        }))

        return (
            <div className='boardWrapper'>

                <div className='dropArea' ref={toUnassigned}>
                    <h3>Unassigned</h3>
                    {/* {mapUnassigned} */}
                    <MapContent itemsArray={items} boardName={"unassigned"}/>
                    
                    
                </div>

                <div className='dropArea' ref={toInProgress}>
                    <h3>In Progress</h3>
                    {/* {mapInProgress} */}
                    <MapContent itemsArray={items} boardName={"inProgress"}/>
                </div>

            </div>
        )
    }

    // Dropping

  return (
    <DndProvider backend={HTML5Backend}>
        <div>
            <h3>Tbored</h3>
            <UserInput items={items} setItems={()=>setItems} counter={counter} setCounter={()=>setCounter(counter + 1)} setLocalStorage={setLocalStorage}/>
            {/* <button onClick={addNew}>Add</button>
            <button onClick={resetBoard}>Reset</button>

            <form>
                <input ref={myForm} />
            </form> */}

            <DropItem />
        </div>
    </DndProvider>
  )
}
