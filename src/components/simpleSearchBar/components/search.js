import React from 'react'
import { useState } from 'react'

export default function Search(props) {

    const [inputText,setUserInput] = useState("")

    const getInput = (e) => {
        setUserInput(e.target.value.toLowerCase())
    }

    const filterData = props.myData.filter(item => 
        item.first_name.toLowerCase().includes(inputText) || 
        item.last_name.toLowerCase().includes(inputText)
    )

    const mapFilterData = filterData.map(item => {
        return (
            <div key={item.id} className='simpleSearchBar__item'>{item.first_name + " " + item.last_name}</div>
        )
    })

    let displayData = inputText === "" ? ""  : mapFilterData


  return (
      <>
        <div className='simpleSearchBar__input'>
            <input className='w-100' onChange={(e)=>getInput(e)} placeholder="Search..." />
        </div>

        <div className='simpleSearchBar__results'>
            {displayData}
        </div>
    </>
  )
}
