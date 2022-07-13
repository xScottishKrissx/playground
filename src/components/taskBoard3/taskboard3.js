import React,{StrictMode, useState} from 'react'
import data from './data'
import './taskboard3.css'

import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'



export default function Taskboard3() {
    const [items, setItems] = useState(data)

    const mapData = items.map(x =>{
        return(
            <div>{x.content}</div>
        )
    })

    function handleOnDragEnd(result){
        console.log(result)
        if(!result.destination) return
        const changeItems = Array.from(items)
        const [newItemsOrder] = changeItems.splice(result.source.index, 1)
        changeItems.splice(result.destination.index, 0, newItemsOrder)

        setItems(changeItems)
    }
  return (
    <div className='taskboard3Wrapper'>
        <DragDropContext onDragEnd={handleOnDragEnd}>

            <Droppable droppableId='items'>
                {(provided)=>(
                    <ul className='items' {...provided.droppableProps} ref={provided.innerRef}>
                        {items.map(({id, content},index) =>{
                            return(
                                <Draggable key={id} draggableId={id} index={index}>
                                    {(provided)=>(
                                        <li {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            {content}
                                        </li>
                                    )}
                                </Draggable >
                            )
                        })}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>

        </DragDropContext>
    </div>

    
  )
}

// return (
   

    
//     <div>
//         <DragDropContext >
//           <Droppable droppableId="items">
//             {(provided) => (
//               <ul className="items" {...provided.droppableProps} ref={provided.innerRef}>
//                 {items.map(({id, content}, index) => {
//                   return (
//                     <Draggable key={id} draggableId={id} index={index}>
//                       {(provided) => (
//                         <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
//                             { content }
//                         </li>
//                       )}
//                     </Draggable>
//                   );
//                 })}
//                 {provided.placeholder}
//               </ul>
//             )}
//           </Droppable>
//         </DragDropContext>
      

//     </div>
    
// );
//             }