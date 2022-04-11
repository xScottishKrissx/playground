import * as React from 'react'

import './modal.css'

import { useState } from 'react';
import Button from 'react-bootstrap/Button';

export const StatelessComponentDefault = (props) =>{

    const [showModal, setModalStatus] = useState(false)

    function toggleModal(setModal){
        // Toggle Modal
        setModalStatus(setModal)
    }
    
return(
    <div className="modal__container">

{/* Activate Modal */}
        <div className="modal__activateModal">        
            <h1>Modal</h1>
            <Button onClick={()=>toggleModal(true)}>Open Modal</Button>
        </div>




{/* Actual Modal  */}
    {showModal === false ?
            
            null

            :
            
            <div className="modal__modalContainer d-flex justify-content-center align-items-center top-0 start-0 position-fixed w-100 h-100"  >
                
                <div className="modal__innerModalBackground h-100 position-absolute w-100" onClick={()=>toggleModal(false)}></div>

                <div className="modal_innerModalContainer p-5 rounded" >
                    <h1>This is a modal</h1>
                    <Button onClick={()=>toggleModal(false)}>Close Modal</Button>
                </div>

            </div>
    }
    </div>

)

}

export default StatelessComponentDefault;