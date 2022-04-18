import * as React from 'react'

import { useState } from 'react'

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

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    const weekdays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ]

    let tempDate = new Date();
    let tempYear = tempDate.getFullYear()
    let tempMonth = tempDate.getMonth()
    let tempDay = tempDate.getDate()
    let tempHour = tempDate.getHours()
    // Will add 10 days to counter every time the counter loads.
    const targetDate = new Date(tempYear, tempMonth, tempDay,tempHour + 1,50,0)

    // Hardcoded Date
    // const targetDate = new Date(2022,3,18,18,36,0);
    // console.log(targetDate)

    const year =  targetDate.getFullYear();
    
    const month = targetDate.getMonth()
    const getMonth = months[month]

    const date = targetDate.getDate()

    const day = targetDate.getDay()
    const weekday = weekdays[day]

    const hour = targetDate.getHours()
    const mins = targetDate.getMinutes()

    // future time
    const futureTime = targetDate.getTime()
    // console.log(futureTime);


    function getRemainingTime(){

        const today = new Date().getTime()
        const t = futureTime - today
        // values in ms
        const singleDay = 24*60*60*1000
        const singleHour = 60*60*1000
        const singleMinute = 60*1000

        // console.log(t)
        // 1s => 1000ms
        // 1m => 60s
        // 1hr => 60min
        // 1d => 24hr


        let days = t/singleDay
        days = Math.floor(days)

        let hours = Math.floor ( (t % singleDay ) / singleHour )
        let minutes = Math.floor ((t % singleHour) / singleMinute)
        let seconds = Math.floor ((t % singleMinute) / 1000)

        if(t < 0){
            clearInterval(countdown)
            setState({complete:true})
        }else{
            setState({
                days:days,
                hours:hours,
                minutes:minutes,
                seconds:seconds
            })
        }


    }
       

    
    // countdown
    let countdown = setInterval(getRemainingTime,1000)


    let complete = state.complete

        return(
            <div className="countdown__container">
                <h2 className="text-center">Simple Countdown</h2>
                <article>

                    <div className="countdown__deadlineContainer pt-4">
                        <h4 className="text-right">Deadline</h4>
                        <div className="countdown__deadline d-flex">
                            <span className="countdown__deadlineWeekday">{weekday},</span>
                            <span className="countdown__deadlineDays">{date}</span>
                            <span className="countdown__deadlineMonth">{getMonth}</span>
                            <span className="countdown__deadlineYear">{year}</span>
                            <span className="countdown__deadlineHours">{hour} : {mins}</span>
                        </div>
                    </div>

                    <div className="countdown__timeRemaining pt-5">
                        <h4 className="text-center">Time Remaining</h4>
                        {complete === true ? 
                            
                            <div className="countdown__timeUpMessage">Time Up!!</div>
                            
                            : 
                            
                            <div className="countdown__timeCountdown"> 
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