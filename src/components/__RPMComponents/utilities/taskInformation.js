import React, { useState } from 'react'

// Source of icon
// https://www.hiclipart.com/free-transparent-background-png-clipart-qmxmp/download
import infoLogoDark from '../RMPComponentView/infoLogoDark.png'
import infoLogoLight  from '../RMPComponentView/infoLogoLight.png'

export default function TaskInformation(props) {

    const [infoOpen, setInfoOpen] = useState(false)

    const toggleInfo =(x)=>{
        setInfoOpen(x)
    }


    let iconStyle = props.iconColour === "light" ? infoLogoLight : infoLogoDark
    return (
        <>
        <div className='component_githubLinkContainer' onClick={()=>toggleInfo(true)}>
            <div className='componentGithubLink'>
                <img alt="Click for more information" src={iconStyle} />
            </div>


        </div>

        {infoOpen === true ? 
            <div className='informationContainer' >

                <div className='informationContainer__background' onClick={()=>toggleInfo(false)}></div>
                <div className='informationContainer__content'>
                    <p>{props.information}</p>
                </div>
                
            </div> 
            : 
            ""
        }


        </>

    )
}
