import React from 'react'
import { useState } from 'react'
export default function ControlButtons(props) {

        // Controls
        const [count, setCount] = useState(1)
        let currentCount = count

        const next = () => {
            if(count === 3){
                props.setPos(0)
                setCount(1)
                return
            }
            currentCount++
            setCount(currentCount)
            props.setPos(props.position - 100)
        }
    
        const prev = () => {
    
            if(count === 1){
                props.setPos(-200)
                setCount(3)
                return
            }
            currentCount--
            setCount(currentCount)
            props.setPos(props.position + 100)
        }

  return (
    <div className='buttonWrapper'>
        <button onClick={()=>next()}>Next</button>
        <button onClick={()=>prev()}>Prev</button>
    </div>
  )
}