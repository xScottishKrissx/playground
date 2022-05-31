import React from 'react'
import { useRef,useState } from 'react'
import { Line } from 'react-chartjs-2'

// import LineChart from './LineChart'


export default function Search(props) {
    const searchBoxRef = useRef()
    const [input,setInput] = useState()

    // Starting Country
    const startingCountry = "UK"
    const getCountry =  input || startingCountry

    const getInput = () =>{
        setInput(searchBoxRef.current.value)
    }

    const {data, covidTimeline} = props
    const filterCountry = data.filter(x => x.country === getCountry)


    // Graphs
    // console.log(covidTimeline)
    const filterCovidTimeline = covidTimeline.filter(x => x.country === getCountry && x.province === null)
    const getTimelineData = filterCovidTimeline[0].timeline
    // console.log(getTimelineData)

    let getCasesFromTimeline = Object.entries(getTimelineData.cases).map(([date,number]) => ({date, number}))
    // console.log(getCasesFromTimeline)

    const [chartData] = useState({
        labels:getCasesFromTimeline.map((x) => x.date),
        datasets:[{
            label:"Cases (Past 30 Days)",
            data:getCasesFromTimeline.map((x) => x.number),
            backgroundColor:"red"
        }]
    })

    const mapTimelineData = filterCovidTimeline.map((x,index) => {
        return(
            <div key={index}>
                <p>{!x.province ? x.country : x.province}</p>
                <p></p>
                <Line data={chartData} />
            </div>
        )
    })




  return (
            <div className='slide s3'>
                <h2>Covid 19 Data</h2>
                    <div>
                        <form>
                            <input ref={searchBoxRef} placeholder='search...' onChange={()=>getInput()}/>
                        </form>

                        
                    </div>

                    <div>
                        {!data ? <p>Loading</p>

                        :

                        filterCountry.length < 1 ? <p>Enter valid search term</p> : 
                        // Well this needs to be better
                        <p>Name: {filterCountry[0]?.country} - Cases Per 1 Million: {filterCountry[0]?.casesPerOneMillion}</p>
                        
                    }
                    
                    {/* Graphs - Timeline Data */}
                    {mapTimelineData.length < 1 ? <p>Chart Unavailable</p> : mapTimelineData}
                    

                    </div>
            </div>
  )
}
