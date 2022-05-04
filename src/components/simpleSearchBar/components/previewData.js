import React from 'react'
import { useRef } from 'react'

export default function PreviewData(props) {

    const previewData = useRef()

    const mapData = props.myData.map(item => {
        return (
            <span className='simpleSearchBar__dataItem' key={item.id}>{item.first_name + " " + item.last_name}</span>
        )
    })

    const toggleData =() => {
        console.log("ToggleData")
        previewData.current.classList.toggle("show")

    }


  return (
            <>
                <div ref={previewData} className="simpleSearchBar__previewDataContainer">

                    <button onClick={()=>toggleData()} id="showDataButton">Preview Data</button>
                    
                    <div  className="simpleSearchBar__previewData">
                        {mapData}
                    </div>

                </div>
            </>
  )
}
