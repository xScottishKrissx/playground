import React, {useState} from 'react'
import { useDrop, useDrag} from 'react-dnd'
import Tasks from './tasks'


export default function Board(props) {
    
    const {tasks, editItems} = props
    console.log(tasks)
    
    const [inProgress, setInProgress] = useState([])
    const [isComplete, setIsComplete] = useState(tasks)
    
    
    const [{checkDrop}, drop] = useDrop(()=>({
        
        accept:"text",
        drop:(item) => addItemToBoard(item),
        collect:(monitor) => ({
            checkDrop: monitor.didDrop()
        }),
    })
    
    )
    
 
    function returnLast(arr) { return arr[arr.length - 1] } 
    if(checkDrop === true){
        // console.log(tasks)
        let newItem = returnLast(tasks)
        // console.log(newItem.id)
        
        // remove that from list
        // editItems(newItem.id)

    }
    const test = () =>{
        console.log(tasks)
    }
    let addItemToBoard = (item) =>{
        console.log(item)
        test()
        // console.log(tasks)
        // editItems(id)
        // const taskList = tasks.filter(task => task.id === id)
        // console.log(taskList)
        // setInProgress((inProgress) => [...inProgress, taskList[0]])
        // console.log(inProgress)
    }
    
    
    // console.log(checkDrop)
    
    const mapCurrentTasks = tasks.map((x,key)=>{
        return(
            <Tasks key={key} id={x.id} content={x.text}/>
        )
    })
    // const mapInProgress = inProgress.map((x,key)=>{
    //     console.log(inProgress)
    //     return(
    //         <Tasks key={key + 10} id={x.id} content={x.text}/>
    //     )
    // })

    const mapComplete = isComplete.map((x,key)=>{
        return(
            <Tasks key={key} id={x.id} content={x.text}/>
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
          {/* {mapInProgress} */}
          </div>
          <div className='taskBoard__column'>Completed
          {mapComplete}
          </div>
        </>
      )
}
