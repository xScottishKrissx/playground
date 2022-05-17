import React from 'react'

import { useRef,useState } from 'react'


export default function Search(props) {

    const searchBoxRef = useRef()

    const getInput = () =>{
        props.setInput(searchBoxRef.current.value)
    }

    const data = props.data
    // console.log(data)

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
                {!data ? <p>Dont do anything</p>

                :

                props.testMessage ? <p>Enter valid search term</p> : 
                
                <p>Name: {data.country} - Case Rate: {data.casesPerOneMillion}</p>
                
            }

            </div>
    </div>
  )
}
