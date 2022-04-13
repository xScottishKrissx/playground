import * as React from 'react'

import './simpleFilter.css'


import { Row,Col } from 'react-bootstrap';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export const SimpleFilter = (props) =>{

    const data = [
        {
            name:"Alan",
            department:"IT",
            img:"https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            name:"Bob",
            department:"HR",
            img:"https://randomuser.me/api/portraits/men/2.jpg"
            
        },
        {
            name:"Cara",
            department:"Marketing",
            img:"https://randomuser.me/api/portraits/women/3.jpg"
        },
        {
            name:"Donna",
            department:"Legal",
            img:"https://randomuser.me/api/portraits/women/4.jpg"
        },
        {
            name:"Edward",
            department:"IT",
            img:"https://randomuser.me/api/portraits/men/5.jpg"
        },
        {
            name:"George",
            department:"Sales",
            img:"https://randomuser.me/api/portraits/men/6.jpg"
        },
        {
            name:"Harry",
            department:"Sales",
            img:"https://randomuser.me/api/portraits/men/7.jpg"
        },
        {
            name:"India",
            department:"Marketing",
            img:"https://randomuser.me/api/portraits/women/8.jpg"
        },
        {
            name:"Jenny",
            department:"Sales",
            img:"https://randomuser.me/api/portraits/women/9.jpg"
        },
        {
            name:"Konnor",
            department:"Legal",
            img:"https://randomuser.me/api/portraits/men/10.jpg"
        },
        {
            name:"Luis",
            department:"Legal",
            img:"https://randomuser.me/api/portraits/men/11.jpg"
        },
        {
            name:"Myrtle",
            department:"Marketing",
            img:"https://randomuser.me/api/portraits/women/12.jpg"
        }

    ]

    const [showModal, setModalStatus] = useState(false)
    const [option, setOption] = useState("All")

    function toggleModal(setModal){
        // Toggle Modal
        setModalStatus(setModal)
        setOption("All")
        document.querySelector('body').classList.toggle("lock-scroll")
    }


    // Filtering 
    function toggleFilter(option){ setOption(option) }
    
    const filterData = data.filter(x => x.department === option)

    let useData;
    if(option === "All") { useData = data } else { useData = filterData }

    const displayInfo = useData.map((x,index) => {
        return(
            
                <Col key={index} sm={3} className="d-flex align-items-center justify-content-flex-start p-0 m-2 w-auto"> 
                    <img src={x.img} alt={x.name} />
                    <p className="text-center">{x.name} - <strong>{x.department}</strong></p>
                </Col>
        )
    })

    // Mapping Buttons from data
    const getDepartmentFromData = data.map(x => x.department)
    // ...return an array of unique values(the departments)
    const departmentArray = Array.from(new Set(getDepartmentFromData))
    departmentArray.unshift("All")
    departmentArray.sort()

    const mapButtons = departmentArray.map((x,index) => {
        return(
            <Button className="ms-2 me-2 ps-4 pe-4" key={index} onClick={()=>toggleFilter(x)}>{x}</Button>
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