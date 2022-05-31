import React from 'react'
import { useState, useEffect } from 'react'
import SimpleChartView from './view/simpleChartView'

export default function SimpleChart() {
    const [data, setData] = useState({
        globalData:"",
        ukData:""
    })
    const [loading, setLoading] = useState(true)

    useEffect(()=>{

        const fetchData = "https://disease.sh/v3/covid-19/vaccine/coverage"
        const fetchUKData = "https://disease.sh/v3/covid-19/vaccine/coverage/countries/uk"
        
        Promise.all([
            fetch(fetchData),
            fetch(fetchUKData)
        ])
        .then(results => 
            Promise.all(results.map(result => 
                result.json()
            ))
        )
        .then(data => {
            // console.log(data)
            let formatData = Object.entries(data[0]).map(([date, number]) => ({date, number}));
            let formatUKData = Object.entries(data[1].timeline).map(([date,number]) => ({date,number}))
            setData({globalData:formatData, ukData: formatUKData})
            setLoading(false)
        })
        },[])
        

  return (
    <div className='w-100'>
        <h2 className='text-center'>Simple Charts</h2>
        {loading === true ? <p>Loading</p>: <SimpleChartView data={data}/> }
    </div>
  )
}
