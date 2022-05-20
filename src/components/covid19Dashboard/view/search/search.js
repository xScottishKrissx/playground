import React from 'react'

import { useRef,useState } from 'react'


export default function Search(props) {
    const searchBoxRef = useRef()
    const [input,setInput] = useState()

    // Starting Country
    const startingCountry = "UK"
    const getCountry =  input || startingCountry

    const getInput = () =>{
        setInput(searchBoxRef.current.value)
    }

    const data = props.data
    // console.log(data)
    // console.log(data[0].country)
    // const {country} = data
    // console.log(country)
    // console.log(getCountry)

    const filterCountry = data.filter(x => x.country === getCountry)
    console.log(filterCountry)
    
    
    // console.log(country)

// console.log(props.testMessage)
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
                <p>Name: {filterCountry[0]?.country} - Case Rate: {filterCountry[0]?.casesPerOneMillion}</p>
                
            }
            

            </div>
    </div>
  )
}
