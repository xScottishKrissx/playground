import React from 'react'
import { useEffect, useState,useRef } from 'react'
import './covid19Dashboard.css'
import View from './view/view'

export default function Covid19Dashboard() {
    const [apiData, setInfo] = useState(null)
    const [loading, setLoading] = useState(true)

    const [testMessage, setTestMessage] = useState(false)

    const [input,setInput] = useState()
    const tempRef = useRef()

    // User Input
    const userCountry = input
    // Starting Country
    const startingCountry = ""

    const getCountry =  userCountry || startingCountry

    useEffect(()=>{

        const handle404 = (response) =>{
                if(response.status === 404){
                    setTestMessage(true)
                }else{
                    setTestMessage(false)
                }
        }
        // Reference
        // const endpoint = "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
        // const endpoint = "https://api.randomuser.me/?results=20"
        const endpoint = "https://disease.sh/v3/covid-19/countries/" + getCountry
        fetch(endpoint)
            
            .then(result => {
                // console.log(result.status)
                handle404(result)
                return result.json()
            })
            .then(data => {
                console.log(data)
                setInfo(data)
                setLoading(false)
                
            })
            .catch(error => console.log(error))

    },[input, getCountry])




    // console.log(loading)

    const getInput = (x) =>{
        setInput(tempRef.current.value)
    }

  return (
    <div>
        {/* {loading ? <p>Loading</p> : <View data={apiData} startingCountry={startingCountry} />} */}

        {loading ? <p>Loading</p>
        
        :
        <div>
            <h2>Covid 19 Data</h2>
            <div>
                <form>
                    <input ref={tempRef} placeholder='search...' onChange={()=>getInput()}/>
                </form>
            </div>

            <div>
                {testMessage ? <p>Enter valid search term</p> : 
                
                <p>Name: {apiData.country} - Case Rate: {apiData.casesPerOneMillion}</p>
                }
                
            </div>
        </div>
    
    }

        {/* <p>Data</p> */}
    </div>
  )
}
