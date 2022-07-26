import React,{useRef} from 'react'

export default function ItemDescription({descriptionLength, currentDescription, addDescription, itemId, columnId}) {

const addDescriptionForm = useRef()

const addNewDescription = () =>{
    const formValue = addDescriptionForm.current.value
    addDescription(formValue, columnId, itemId)
}

return (
    <div className='itemWindowItemDescription'>
        <form>
            {descriptionLength > 0 ?  
                <textarea ref={addDescriptionForm} onChange={addNewDescription} value={currentDescription} />
                :
                <textarea ref={addDescriptionForm} onChange={addNewDescription}  placeholder="Add Description"/>
            }
        </form>
    </div>
)
}
