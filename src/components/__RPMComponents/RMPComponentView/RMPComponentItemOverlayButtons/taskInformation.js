import React, { useState } from 'react'

// Source of icon
// https://www.hiclipart.com/free-transparent-background-png-clipart-qmxmp/download
import infoLogoDark from './infoLogoDark.png'
import infoLogoLight  from './infoLogoLight.png'

export default function TaskInformation(props) {

    const [infoOpen, setInfoOpen] = useState(false)
    const toggleInfo =(x)=>{ setInfoOpen(x) }

    let iconStyle = props.iconColour === "light" ? infoLogoLight : infoLogoDark
    return (
        <>

        <div className='componentItemButtonIconContainer' onClick={()=>toggleInfo(true)}>
            <div className='componentItemButtonIcon p-1'>
                <img alt="Click for more information" src={iconStyle} />
            </div>
        </div>

        {infoOpen === true ? 
            <div className='informationContainer d-flex align-items-start justify-content-end position-absolute left-0 top-0 h-100 w-100 ' >

                <div className='informationContainer__background position-absolute h-100 w-100' onClick={()=>toggleInfo(false)}></div>
                <div className='informationContainer__content bg-secondary text-white mt-5 me-3 ms-3 p-3'>
                    <div className='informationContainer__title mb-4 d-flex align-items-center'>
                        <span role="button" onClick={()=>toggleInfo(false)} className="material-icons me-2">cancel</span>
                        <h4 className='m-0'>{props.name}</h4>
                    </div>
                    
                    <p>{props.information}</p>

                    <h4>tags</h4>
                    <p>{props.tags}</p>
                </div>
                
            </div> 
            : 
            ""
        }
        </>
    )
}