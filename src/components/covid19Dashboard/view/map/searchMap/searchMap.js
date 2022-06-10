import React, {useState, useRef} from 'react'
import SearchBox from '../../searchBox/searchBox'
import './searchMap.css'

export default function SearchMap(props) {

    const thing = useRef()
    const {countryData, goToCountry, toggleDrag, closePanel} = props
    // console.log(countryData)


    const [input,setInput] = useState("")
    // Passes the input from searchBox to getCountry which allows for results to be displayed.
    const getInput = (x) => setInput(x) 

    // Find country in country data array
    const findCountry = countryData.filter(x => x.country.toLowerCase() === input.toLowerCase() )
    // console.log(findCountry[0])

    
    const handleClick = () =>{
        goToCountry(findCountry[0].countryInfo.lat, findCountry[0].countryInfo.long)
        setInput("")
    }

    // Disable the maps dragging feature while using the search box.
    const handleDrag = (x) => toggleDrag(x) 

  return (
      <div className='searchMap' onMouseDown={()=>handleDrag(true)} onMouseUp={()=>handleDrag(false)} ref={thing}>

          <SearchBox input={getInput} showIcon={true} closePanel={closePanel} />

        {findCountry.length > 0 ? 
           <div className='goToCountryButton' onClick={handleClick}>
               <span class="material-icons">visibility</span> Country located, View Now! 
            </div> 
            : 
            <span></span>
            }
  
      </div>
    )
  }