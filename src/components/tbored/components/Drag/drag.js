import React,{useState} from 'react'
import {useDrag} from 'react-dnd'

function DragItem({id, text, test, index}) {
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

    const [draggedItem, setDraggedItem] = useState()
    const [draggedOverItem, setDraggedOverItem] = useState()

    const onDragStart = (e) =>{
        console.log("On Drag Start")
        // console.log(index)
        // draggedItem = test[index]
        // setDraggedItem(test[index])

        console.log(test[index])

        if(test[index] === undefined){
            console.log("Errororoororororororo")
        }


        setDraggedItem(test[index])



        // console.log(draggedItem)
        // console.log(draggedOverItem)
        e.dataTransfer.effectAllowed = "move"
        e.dataTransfer.setData("text/html", e.target.parentNode)
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20)
    }
 
    const onDragOver = () =>{
        console.log(draggedItem)
        // draggedOverItem = test[index]
        setDraggedOverItem(test[index])
        if(draggedItem === draggedOverItem){
            // console.log("Same")
            return
        }
        // console.log(draggedItem)
        // console.log(test)
        let items = test.filter((item) => item !== draggedItem)
        // console.log(items)

        items.splice(index, 0, draggedItem)

        // console.log(items)

        // console.log(draggedOverItem)
    }

 

    return <p  onDragOver={onDragOver}  onDragStart={(e)=>onDragStart(e)} draggable ref={drag}>{text}</p>
}




export default function MapContent({itemsArray, boardName}) {




   
    return itemsArray.map((x,key) =>{
        if(x.board === boardName){
            return(
                <div>
                    <DragItem index={key} test={itemsArray} id={x.id} key={key} text={x.text}/>
                </div>
            )
        }
    })
    
 }
 