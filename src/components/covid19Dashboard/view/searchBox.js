import React, {useRef, useState} from 'react'


export default function SearchBox(props) {
    
    const searchBoxRef = useRef()
    const {input} = props
    // const [input,setInput] = useState()

    const getInput = () =>{
        // setInput(searchBoxRef.current.value)
        input(searchBoxRef.current.value)
    }

  return (
    <form className='w-100'>
        <input className='w-100' ref={searchBoxRef} placeholder='search...' onChange={()=>getInput()}/>
    </form>
    )
}
