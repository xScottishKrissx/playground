import React,{useState} from 'react'
import { useRef } from 'react'
import {useDrag} from 'react-dnd'

function DragItem({id, text, test, index, setDraggedItem, setDraggedOverItem,}) {

    const testRef= useRef()

    const [{isDragging}, drag] = useDrag(()=>({
        type:"text",
        item:{id:id},
        options:"copy",
        collect: (monitor) =>({
            isDragging: monitor.isDragging(),
        }),
    }))

    if(isDragging){
        // console.log(index)
    }
    // let draggedItem
    // let draggedOverItem

    // const [draggedItem, setDraggedItem] = useState()
    // const [draggedOverItem, setDraggedOverItem] = useState()
    // console.log(draggedItem)
    // console.log(index)
    const onDragStart = (e) =>{
        // console.log("On Drag Start")
        // console.log(test[index])
        // console.log(e.target.parentNode)
        
        console.log(e.target.id)
        if(e.target.id === id){
            
            e.target.classList.add("testStyle")
        }



        setDraggedItem(test[index])
        e.dataTransfer.effectAllowed = "move"
        e.dataTransfer.setData("text/html", e.target.parentNode)
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20)
    }
 
    const onDragOver = (e) =>{
        // console.log("Over")
        // console.log(index)
        // console.log(test[index])
        e.target.classList.add("testStyle")
        setDraggedOverItem(test[index], index)
        // console.log(test[index])
       

        // console.log(setDraggedOverItem)
        
        // if(draggedItem === draggedOverItem){ return }
        // let items = test.filter((item) => item !== draggedItem)
        // items.splice(index, 0, draggedItem)
    }

    const onDragEnd = (e) =>{
        // console.log(testRef.current.children[0])
        console.log(testRef.current)
        // testRef.current.children[0].classList.remove("testStyle")
        // console.log(test[index])
        // console.log(e)
    }

    const style = {
        border: '1px dashed gray',
        borderBottom:"5px solid grey",
        backgroundColor: 'white',
        padding: '0.5rem 1rem',
        marginRight: '1.5rem',
        marginBottom: '1.5rem',
        cursor: 'move',
        // float: 'left',
      }
    
    const opacity = isDragging ? 1 : 1

    return (
        <div className="board_item" ref={testRef}>

            <p 
                key={index} 
                id={id}
                className={id}
                onDragOver={(e)=>onDragOver(e)}  
                onDragStart={(e)=>onDragStart(e)} 
                onDragEnd={(e)=>onDragEnd(e)}
                draggable 
                ref={drag}
                style={{...style}}
            >
                {text}
            </p>
        </div>
    )
}




export default function MapContent({itemsArray, boardName, setDraggedItem, setDraggedOverItem}) {


    

   
    return itemsArray.map((x,key) =>{
        if(x.board === boardName){
            return(
                
                    <DragItem setDraggedItem={setDraggedItem} setDraggedOverItem={setDraggedOverItem} index={key} test={itemsArray} id={x.id} key={key} text={x.text}/>
                
            )
        }
    })
    
 }
 