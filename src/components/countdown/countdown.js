import * as React from 'react'

import { useState,useEffect } from 'react'

import './countdown.css'

export const Countdown = (props) =>{

    const [state, setState] = useState({
        year: false,
        month: false,
        days:false,
        hours: false,
        seconds:false,
        complete: false
    })

    let tempDate = new Date();
    let tempYear = tempDate.getFullYear()
    let tempMonth = tempDate.getMonth()
    let tempDay = tempDate.getDate()
    let tempHour = tempDate.getHours()

    const targetDate = new Date(tempYear + 1, tempMonth, tempDay,tempHour,0,0)
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour:'numeric',
        minute:'numeric'
    }

    const displayDeadline = targetDate.toLocaleDateString('en-GB', dateOptions);
    const futureTime = targetDate.getTime()

    useEffect(() => {
       

        const tickDown = setInterval(()=>{

            const today = new Date().getTime()
            const t = futureTime - today
            // values in ms
            const singleDay = 24*60*60*1000
            const singleHour = 60*60*1000
            const singleMinute = 60*1000
    
            // 1s => 1000ms // 1m => 60s // 1hr => 60min // 1d => 24hr
        
            let days = t / singleDay
            days = Math.floor(days)
            let hours = Math.floor ( (t % singleDay ) / singleHour )
            let minutes = Math.floor ((t % singleHour) / singleMinute)
            let seconds = Math.floor ((t % singleMinute) / 1000)
    
            if(t < 0){
                clearInterval(tickDown)
                setState({complete:true})
            }else{
                setState({
                    days:days,
                    hours:hours,
                    minutes:minutes,
                    seconds:seconds
                })
            }

        },1000)

        return () => {
            clearInterval(tickDown)
        }
    },[futureTime])       

    let complete = state.complete

        return(
            <div className="countdown__container d-flex flex-column justify-content-center h-100 w-100">
                <h2 className="text-center">Simple Countdown</h2>
                <article>

                    
{/* Deadline */}
                    <div className="countdown__deadlineContainer d-flex flex-column align-items-center pt-4">
                        <h4 className="text-right">Deadline</h4>
                        <div>
                            {displayDeadline}
                        </div>
                    </div>

{/* Countdown */}
                    <div className="countdown__timeRemaining pt-5">
                        <h4 className="text-center">Time Remaining</h4>
                        {complete === true ? 
                            
                            <div className="countdown__timeUpMessage">Time Up!!</div>
                            
                            : 
                            
                            <div className="countdown__timeCountdown d-flex justify-content-evenly"> 
                                <span><span>{state.days}</span> Days</span>
                                <span><span>{state.hours}</span> Hours</span>
                                <span><span>{state.minutes}</span> Minutes</span>
                                <span><span>{state.seconds}</span> Seconds</span>                        
                            </div>
                        }
                        
                    </div>
                
                    
                </article>
            </div>
        )

}

export default Countdown;