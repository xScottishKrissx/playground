import * as React from 'react'

import './simpleFilter.css'

import { Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import myData from './data.json'

export const SimpleFilter = (props) =>{

    const data = myData
    const [showModal, setModalStatus] = useState(false)
    const [option, setOption] = useState("All")

    function toggleModal(setModal){
        // Toggle Modal
        setModalStatus(setModal)
        setOption("All")
        document.querySelector('body').classList.toggle("lock-scroll")
    }


///////// Filtering 
    function toggleFilter(option){ setOption(option) }
    
    const filterData = data.filter(x => x.department === option)

    let useData;
    if(option === "All") { useData = data } else { useData = filterData }

    const displayInfo = useData.map((x,index) => {
        return(
            
                <Col key={index} className="d-flex align-items-center justify-content-flex-start p-0 m-2 w-auto"> 
                    <img src={x.img} alt={x.name} />
                    <p className="text-center">{x.name} - <strong>{x.department}</strong></p>
                </Col>
        )
    })




///////// Mapping Buttons from data
    const getDepartmentFromData = data.map(x => x.department)
    // ...return an array of unique values(the departments)
    const departmentArray = Array.from(new Set(getDepartmentFromData))
    // Adding an all to the department array
    departmentArray.unshift("All")
    // Moving all to the start of the array
    departmentArray.sort()

    const mapButtons = departmentArray.map((x,index) => {
        return(
            <Button className="ps-4 pe-4" key={index} onClick={()=>toggleFilter(x)}>{x}</Button>
        )
    })
    


return(
    <div className="simpleFilter__container">

{/* Activate Modal */}
        <div className="simpleFilter__activateModal">        
            <h1>Simple Filter</h1>
            <Button onClick={()=>toggleModal(true)}>Open Window</Button>
        </div>




{/* Actual Modal  */}
    {showModal === false ?
            
            null

            :
            


            
            <div className="simpleFilter__modalContainer d-flex justify-content-center top-0 start-0 position-fixed w-100 h-100 overflow-auto"  >
                
                <div className="simpleFilter__innerModalBackground h-100 position-absolute w-100" onClick={()=>toggleModal(false)}></div>

                <div className="simpleFilter__innerModalContainer p-5 rounded w-100" >
                    <h1>Simple Filter</h1>

                    <div className="simpleFilter__filterButtons"> {mapButtons} </div>
                   
                    
                    <Row className="simpleFilter__staffOutput justify-content-left">
                        {displayInfo}
                    </Row>
                    
                    <Button onClick={()=>toggleModal(false)}>Close Window</Button>
                    
                </div>

            </div>
    }
    </div>

)

}

export default SimpleFilter;