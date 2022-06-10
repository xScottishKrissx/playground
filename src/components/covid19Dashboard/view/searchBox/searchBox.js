import React, {useRef} from 'react'
import './searchBox.css'
export default function SearchBox(props) {    
    const searchBoxRef = useRef()
    const {input,showIcon, closePanel} = props

    const getInput = () => input(searchBoxRef.current.value) 

    return (
        <form className='w-100 d-flex align-items-center' >
            {/* Map Search */}
            {showIcon ? 
                <div className='searchIcon' onClick={closePanel}>
                    <span className="material-icons p-2">search</span>
                </div> 
                : null
            }

            <input className='w-100' ref={searchBoxRef} placeholder='search...' onChange={()=>getInput()}/>
        </form>
    )
}
