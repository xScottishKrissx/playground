import React,{StrictMode, useState} from 'react'
// import data from './data'
import './taskboard3.css'

import { DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd'

const data = [

    {id:'task1', content:'task-1 content'},
    {id:'task2', content:'task-2 content'},
    {id:'task3', content:'task-3 content'},
    {id:'task4', content:'task-4 content'},
    

];

const columnData = 
{
    "unassigned": {
        name:"Todo",
        items:data
    },
    "inprogress": {
        name:"progress",
        items:[]
    }
}


export default function Taskboard3() {

    const [columns, setColumns] = useState(columnData)

    

    const onDropEnd = (result) =>{

    }

    return (
        <div className='taskboardWrapper'>
            <DragDropContext onDropEnd={onDropEnd}>
            {/* {newThing} */}
            {Object.entries(columns).map(([id, column])=>{
                return(
                    <Droppable droppableId={id}>
                        {(provided, snapshot) =>{
                            return(
                                <div 
                                    ref={provided.innerRef} 
                                    {...provided.droppableProps} 
                                    style={{ 
                                        background: snapshot.isDragging ? 'lightblue' : 'lightgrey', 
                                        width:250, 
                                        minHeight:150
                                    }}
                                >
                                    
                                    {column.items.map((item, index) =>{
                                        return(
                                            <Draggable index={index} key={item.id} draggableId={item.id}>
                                                {(provided, snapshot) =>{
                                                    return(
                                                        <div 
                                                            ref={provided.innerRef} 
                                                            {...provided.draggableProps} 
                                                            {...provided.dragHandleProps}
                                                            style={{
                                                                userSelect:'none',
                                                                padding:16,
                                                                margin: "0 0 8px 0",
                                                                minHeight:"50px",
                                                                backgroundColor: snapshot.isDragging ? '#263B4A' : 'red',
                                                                color:"white",
                                                                ...provided.draggableProps.style
                                                            }}
                                                            >
                                                                {item.content}
                                                            </div>
                                                    )
                                                }}
                                            </Draggable>
                                        )
                                    })}

                                </div>
                            )
                        }}
                    </Droppable>
                )
            })}

            </DragDropContext>
        </div>
    )
}


// export default function Taskboard3() {
//     console.log(columnData.items.items)
//     const [columns, setColumns] = useState(columnData)
//     // const [items, setItems] = useState(columnData.items.items)
    
//     function handleOnDragEnd(result, columns){
//         // console.log(result)
//         if(!result.destination) return
//         const column = columns[result.source.droppableId]
//         const copyOfItems = [...column.items]
    
//         const [removed] = copyOfItems.splice(result.source.index, 1)
//         copyOfItems.splice(result.destination.index, 0, removed)

//         setColumns({
//             ...columns,
//             [result.source.droppableId]:{
//                 ...column,
//                 items: copyOfItems
//             }
//         })
//     }

    
    // const mapData = columns.items.items.map(({id, content}, index) =>{
    //     return(
    //         <Draggable key={id} draggableId={id} index={index}>
    //             {(provided)=>(
    //                 <p {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={{...provided.draggableProps.style}}>
    //                     {content}
    //                 </p>
    //             )}
    //         </Draggable >
    //     )
    // })

    // function MapColumn ({column}){
    //     console.log(column)
    //     const mapThing = column.items.map(({id, content}, index) =>{
    //         return(
    //             <Draggable key={id} draggableId={id} index={index}>
    //                 {(provided)=>(
    //                     <p {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef} style={{...provided.draggableProps.style}}>
    //                         {content}
    //                     </p>
    //                 )}
    //             </Draggable >
    //         )
    //     })
    //     return mapThing
    // }

    
//   return (
//     <div className='taskboard3Wrapper'>
//         <DragDropContext onDragEnd={(x) => handleOnDragEnd(x, columns)}>
//             {Object.entries(columns).map(([id, column])=>{
//                 return(
//                     <div key={id}>

//                     <h3>{column.name}</h3>
//                     <Droppable droppableId='items' key={id}>
//                         {(provided,snapshot)=>(
//                             <div className='items' {...provided.droppableProps} ref={provided.innerRef} 
//                             style={{background: snapshot.isDraggingOver ? 'lightblue' : "white", width:250, minHeight:250}}>
//                                 {mapData}
//                                 {/* <MapColumn column={column}/> */}
//                                 {provided.placeholder}
//                             </div>
//                         )}
//                     </Droppable>
//                     </div>

//                 )
//             })}


//         </DragDropContext>
//     </div>

    
//   )
// }
