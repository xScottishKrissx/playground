import React from 'react'
import { useRef,useState } from 'react'
// import { Line } from 'react-chartjs-2'
// import Graph from './graphs/graph'
import Latest from './latest/latest'

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

    const {data, covidTimeline, countryVaccine} = props

    // Graphs
    // console.log(covidTimeline)
    const filterCovidTimeline = covidTimeline.filter(x => x.country === getCountry && x.province === null)
    const filterCountryVaccine = countryVaccine.filter(x => x.country === getCountry)

  return (
            <div className='slide s3'>
                <h2>Covid 19 Data</h2>
                    <div>
                        <form>
                            <input ref={searchBoxRef} placeholder='search...' onChange={()=>getInput()}/>
                        </form>
                    </div>

                    <div>
                        {!data  ? 
                            <p>Loading Search Results...</p>
                        :
                            
                            <Latest 
                                data={data} 
                                country={getCountry} 
                                countryVaccine={filterCountryVaccine}
                                // Graph
                                covidTimeline={filterCovidTimeline}
                            />
                            
                            
                        }
                    
                    
                    {/* Graphs - Timeline Data */}
                    {/* {filterCovidTimeline.length < 1 ? 
                        <p>*Graph not available</p> 
                        : 
                        <Graph data={filterCovidTimeline} countryVaccine={filterCountryVaccine}/>
                    } */}

                    </div>
            </div>
  )
}
