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
                // console.log(data)
                setInfo(data)
                setLoading(false)
                
            })
            .catch(error => console.log(error))
    
        const endPoint2 = "https://disease.sh/v3/covid-19/historical/all?lastdays=30"
        fetch(endPoint2)
            .then(result => {
                return result.json()
            })
            .then(data => {
                // console.log(data)
                const sum = [data.cases].reduce((partialSum,a) => partialSum + a,0)
                // console.log(sum)
            })

    },[input, getCountry])




    // console.log(loading)

    const getInput = (x) =>{
        setInput(tempRef.current.value)
    }

    // Controls
    const [startingPos,setPos] = useState(0)
    const [count, setCount] = useState(1)
    let currentCount = count
    const next = () => {
        
        if(count === 3){
            setPos(0)
            setCount(1)
            return
        }
        currentCount++
        setCount(currentCount)
        setPos(startingPos - 100)
    }

    const prev = () => {

        if(count === 1){
            setPos(-200)
            setCount(3)
            return
        }
        currentCount--
        setCount(currentCount)
        setPos(startingPos + 100)
    }

    const slideWrapperPosition = { transform: "translateX(" + startingPos + '%)'}

  return (
    <div className='covid19DashboardContainer'>
        {/* {loading ? <p>Loading</p> : <View data={apiData} startingCountry={startingCountry} />} */}

        {loading ? <p>Loading</p>
        
        :
        
        <>
        <div style={slideWrapperPosition} className='slideWrapper'>
            {/* <h2>Covid 19 Data</h2>
            <div>
                <form>
                    <input ref={tempRef} placeholder='search...' onChange={()=>getInput()}/>
                </form>
            </div>

            <div>
                {testMessage ? <p>Enter valid search term</p> : 
                
                <p>Name: {apiData.country} - Case Rate: {apiData.casesPerOneMillion}</p>
                }
            </div> */}
            <div className='slide s1'>Slide 1</div>
            <div className='slide s2'>Slide 2</div>
            <div className='slide s3'>Slide 3</div>
        </div>

        
        <div className='buttonWrapper'>
            <button onClick={()=>next()}>Next</button>
            <button onClick={()=>prev()}>Prev</button>
        </div>
        </>

        
    
    }

        {/* <p>Data</p> */}
    </div>
  )
}
