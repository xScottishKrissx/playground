import React from 'react'
import { useRef,useState } from 'react'
import './search.css'

import Latest from './latest/latest'
import Loading from '../loading'

export default function Search(props) {

    // Local Storage
    const usersFavCountry = localStorage.getItem("favCountry")
    // console.log(usersFavCountry)

    const searchBoxRef = useRef()
    const [input,setInput] = useState()


    // Starting Country
    const startingCountry = usersFavCountry || "UK"
    const getCountry =  input || startingCountry

    const getInput = () =>{
        setInput(searchBoxRef.current.value)
    }

    const setNewCountry = (x) => {
        localStorage.setItem("favCountry", x)
    }

    const {data, covidTimeline, countryVaccine} = props

    // Graphs
    // console.log(covidTimeline)
    const filterCovidTimeline = covidTimeline.filter(x => 
        x.country.toLowerCase() === getCountry.toLowerCase()
        && x.province === null)
    // console.log(filterCovidTimeline)

    const filterCountryVaccine = countryVaccine.filter(x => x.country.toLowerCase() === getCountry.toLowerCase())

  return (
            <div className='slide s3'>
                    
                    {/* Search.js header */}
                    <div className='searchInputArea d-flex align-items-center'>
                        <h2 className='ms-3 me-3'>Country Lookup</h2>
                        <form className='w-100'>
                            <input className='w-100' ref={searchBoxRef} placeholder='search...' onChange={()=>getInput()}/>
                        </form>
                    </div>

                    {/* Search.js content  */}
                    <div className='searchResultsArea'>
                        {!data  ? 
                            <Loading content="loading search results..." />
                        :
                            <Latest 
                                data={data} 
                                country={getCountry} 
                                countryVaccine={filterCountryVaccine}
                                // Graph
                                covidTimeline={filterCovidTimeline}
                                setNewCountry={setNewCountry}
                                currentDefault={startingCountry}
                            />
                        }
                    </div>
            </div>
  )
}
