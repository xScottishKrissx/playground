import React from 'react'
 import { useState } from 'react'

export default function View(props) {
    const [info, setInfo] = useState(props.data)


    const getInfo = info || ""
    const mapInfo = getInfo.map(x =>{
        return(
            <p>{x.country}</p>
        )
    })

  return (
    <div>{mapInfo}</div>
  )
}
