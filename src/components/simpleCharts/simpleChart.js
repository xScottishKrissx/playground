import React from 'react'
import { useState, useEffect } from 'react'
import SimpleChartView from './view/simpleChartView'

export default function SimpleChart() {
    const [data, setData] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const fetchData = "https://disease.sh/v3/covid-19/vaccine/coverage"
        
        fetch(fetchData)
        .then(result => {
            return result.json()
        })
        .then(data => {
            let formatData = Object.entries(data).map(([date, number]) => ({date, number}));
            setData(formatData)
            setLoading(false)
        })
        },[])
        

  return (
    <div className='w-100'>
        {loading === true ? <p>Loading</p>: <SimpleChartView data={data}/> }
    </div>
  )
}
