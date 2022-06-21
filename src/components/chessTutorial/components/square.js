import React from 'react'

export default function Square({black, children}) {
    const fill = black ? 'black' : 'white'
    const stroke = black ? 'white' : 'black'

    const style = {
        backgroundColor: fill, color: stroke, width:"100%", height:"100%" 
    }

    return (
        <div style={style}> {children} </div>
    )
}
