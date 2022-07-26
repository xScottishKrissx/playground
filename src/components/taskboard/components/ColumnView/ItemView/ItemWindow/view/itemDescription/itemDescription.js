import React,{useRef} from 'react'

import './itemDescription.css'

export default function ItemDescription({descriptionLength, currentDescription, addDescription, itemId, columnId, closeItemWindow}) {

const addDescriptionForm = useRef()

const addNewDescription = () =>{
    const formValue = addDescriptionForm.current.value
    addDescription(formValue, columnId, itemId)
}

const detectKeyDown = (e) =>{
    if(e.key === "Enter"){
        e.preventDefault()
        closeItemWindow()
    }
}

return (
    <div className='itemWindowItemDescription'>
        <form>
            {descriptionLength > 0 ?  
                <textarea onKeyDown={detectKeyDown} ref={addDescriptionForm} onChange={addNewDescription} value={currentDescription} />
                :
                <textarea onKeyDown={detectKeyDown} ref={addDescriptionForm} onChange={addNewDescription}  placeholder="Add Description"/>
            }
        </form>
    </div>
)
}
