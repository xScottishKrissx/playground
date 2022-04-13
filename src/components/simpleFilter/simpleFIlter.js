import * as React from 'react'

import './simpleFilter.css'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export const SimpleFilter = (props) =>{

    const data = [
        {
            name:"Alan",
            department:"IT"
        },
        {
            name:"Bob",
            department:"IT"
        },
        {
            name:"Cara",
            department:"Marketing"
        },
        {
            name:"Donna",
            department:"Legal"
        },
        {
            name:"Edward",
            department:"IT"
        },
        {
            name:"George",
            department:"Sales"
        },
        {
            name:"Harry",
            department:"Sales"
        },
        {
            name:"India",
            department:"Marketing"
        },
        {
            name:"Jenny",
            department:"Sales"
        },
        {
            name:"Konnor",
            department:"Legal"
        },
        {
            name:"Luis",
            department:"Legal"
        },
        {
            name:"Myrtle",
            department:"Marketing"
        }

    ]

    const [showModal, setModalStatus] = useState(false)
    const [option, setOption] = useState("All")

    function toggleModal(setModal){
        // Toggle Modal
        setModalStatus(setModal)
        setOption("All")
    }

    function toggleFilter(option){ setOption(option) }
    
    const filterData = data.filter(x => x.department === option)

    let useData;
    if(option === "All") { useData = data } else { useData = filterData }

    const displayInfo = useData.map((x,index) => {
        return(
            <div key={index}>
                <p>{x.name} - {x.department}</p>
            </div>
        )
    })


return(
    <div className="modal__container">

{/* Activate Modal */}
        <div className="modal__activateModal">        
            <h1>Simple Filter</h1>
            <Button onClick={()=>toggleModal(true)}>Open Window</Button>
        </div>




{/* Actual Modal  */}
    {showModal === false ?
            
            null

            :
            
            <div className="modal__modalContainer d-flex justify-content-center align-items-center top-0 start-0 position-fixed w-100 h-100"  >
                
                <div className="modal__innerModalBackground h-100 position-absolute w-100" onClick={()=>toggleModal(false)}></div>

                <div className="modal_innerModalContainer p-5 rounded" >
                    <h1>Simple Filter</h1>
                    <Button onClick={()=>toggleFilter("All")}>All</Button>
                    <Button onClick={()=>toggleFilter("IT")}>IT</Button>
                    <Button onClick={()=>toggleFilter("Sales")}>Sales</Button>
                    <Button onClick={()=>toggleFilter("Legal")}>Legal</Button>
                    <Button onClick={()=>toggleFilter("Marketing")}>Marketing</Button>
                    {displayInfo}
                    <Button onClick={()=>toggleModal(false)}>Close Modal</Button>
                </div>

            </div>
    }
    </div>

)

}

export default SimpleFilter;