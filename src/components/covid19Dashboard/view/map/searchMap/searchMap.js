import React, {useState} from 'react'
import SearchBox from '../../searchBox'
import './searchMap.css'

export default function SearchMap(props) {
    const {countryData, goToCountry} = props
    // console.log(countryData)


    const [input,setInput] = useState("")
    // Passes the input from searchBox to getCountry which allows for results to be displayed.
    const getInput = (x) => setInput(x) 

    // Find country in country data array
    const findCountry = countryData.filter(x => x.country.toLowerCase() === input.toLowerCase() )
    // console.log(findCountry[0])

  return (
      <div className='searchMap'>
          <SearchBox input={getInput} />
            {findCountry.length > 0 ? 
                <span onClick={()=>goToCountry(findCountry[0].countryInfo.lat, findCountry[0].countryInfo.long)}>Result Found, GO!</span> 
                : 
                <span>...searching</span>
            }
          {/* <span>input: </span> */}
      </div>
    )
  }