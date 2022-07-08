import React,{useState} from 'react'
import {useDrag} from 'react-dnd'

function DragItem({id, text, test, index, setDraggedItem, setDraggedOverItem}) {
    const [{isDragging}, drag] = useDrag(()=>({
        type:"text",
        item:{id:id},
        collect: (monitor) =>({
            isDragging: monitor.isDragging(),
        }),
    }))

    // if(isDragging){
    //     console.log(index)
    // }
    // let draggedItem
    // let draggedOverItem

    // const [draggedItem, setDraggedItem] = useState()
    // const [draggedOverItem, setDraggedOverItem] = useState()
    // console.log(draggedItem)
    // console.log(index)
    const onDragStart = (e) =>{
        console.log("On Drag Start")
        // console.log(test[index])
        setDraggedItem(test[index])
        e.dataTransfer.effectAllowed = "move"
        e.dataTransfer.setData("text/html", e.target.parentNode)
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20)
    }
 
    const onDragOver = () =>{
        setDraggedOverItem(test[index])
        // if(draggedItem === draggedOverItem){ return }
        // let items = test.filter((item) => item !== draggedItem)
        // items.splice(index, 0, draggedItem)
    }

 

    return <p 
        key={index} 
        onDragOver={onDragOver}  
        onDragStart={(e)=>onDragStart(e)} 
        draggable 
        ref={drag
    }>
        {text}
    </p>
}




export default function MapContent({itemsArray, boardName, setDraggedItem, setDraggedOverItem}) {


    

   
    return itemsArray.map((x,key) =>{
        if(x.board === boardName){
            return(
                <div>
                    <DragItem setDraggedItem={setDraggedItem} setDraggedOverItem={setDraggedOverItem} index={key} test={itemsArray} id={x.id} key={key} text={x.text}/>
                </div>
            )
        }
    })
    
 }
 