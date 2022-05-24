import React from 'react'
import { useState, useEffect } from 'react'
import LineChart from './LineChart'
import {UserData} from './data'

export default function SimpleChart() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    console.log(UserData)

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets:[{
            label:"Users Gained",
            data: UserData.map((data) => data.userGain)
        }]
    })
    
    useEffect(()=>{


        // const dataCovidTimeline = "https://disease.sh/v3/covid-19/historical"
        const fetchData = "https://disease.sh/v3/covid-19/historical"
        
        fetch(fetchData)
        .then(result => {
            return result.json()
        })
        .then(data => {
            setData(data[0])
            setLoading(false)
        })

    
        
    
        },[])

        // console.log(Object.entries(data.timeline.cases))
        // const map = new Map(Object.entries(data.timeline.cases))
        // console.log(map)

  return (
    <div>
        {loading === true ? <p>Loading</p>: 
        
        
        // <p>Ready To Go</p>
        <LineChart data={userData} />
        }

    </div>
  )
}
