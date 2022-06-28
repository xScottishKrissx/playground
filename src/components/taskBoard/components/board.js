import React, {useState} from 'react'
import { useDrop, useDrag} from 'react-dnd'
import Tasks from './tasks'


export default function Board(props) {
    
    const {tasks} = props

    
    const [inProgress, setInProgress] = useState([])
    const [isComplete, setIsComplete] = useState([])
    
    
    const [{checkDrop}, drop] = useDrop(()=>({

        accept:"text",
        drop:(item) => addItemToBoard(item.id),
        collect:(monitor) => ({
            checkDrop: monitor.didDrop()
        })
        
    }))
    
    if(checkDrop === true){
        console.log("Dropped, now remove from array")
    }
    
    
    const addItemToBoard = (id) =>{
        const taskList = tasks.filter(task => task.id === id)
        setInProgress((inProgress) => [...inProgress, taskList[0]])
    }
    
    
    console.log(checkDrop)
    
    const mapCurrentTasks = tasks.map(x=>{
        return(
            <Tasks id={x.id} content={x.text}/>
        )
    })
    const mapInProgress = inProgress.map(x=>{
        return(
            <Tasks key={x.id} id={x.id} content={x.text}/>
        )
    })
  
      return(
        <>
          <div className='taskBoard__column'>Tasks
          {/* <mapCurrentTasks /> */}
          {mapCurrentTasks}
          
            {/* <Tasks currentTasks={tasks} content={}/> */}
          </div>
  
          <div ref={drop} className='taskBoard__column'>In Progress
          {mapInProgress}
          </div>
          {/* <div ref={drop2} className='taskBoard__column'>Completed</div> */}
        </>
      )
}
