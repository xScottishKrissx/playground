import React,{useRef} from 'react'

export default function ItemWindow({itemWindowState, item, closeItemWindow, columnId, addDescription}) {

    const {id, content, description} = item
    
    const addDescriptionForm = useRef()
    
    const addNewDescription = () =>{
        const formValue = addDescriptionForm.current.value

        // if(formValue.length < 1) return

        addDescription(formValue, columnId, itemWindowState.itemId)
        addDescriptionForm.current.value = ""
    }

    console.log(description.length)
    
    return (
        <>

            {itemWindowState.itemId === id ? 
                
                <div className='itemWindow'>
                    <button onClick={closeItemWindow}>Close</button>
                    <h2>{content}</h2>    
                    {/* <p>{description}</p> */}

                    <hr />
                    {description.length > 0 ?  
                    <>
                        <form>
                            <textarea ref={addDescriptionForm} onChange={addNewDescription} value={description} />
                        </form>
                        {/* <button onClick={addNewDescription}>Edit Description</button> */}
                    </>
                    : 
                    <>
                        <form>
                            <textarea aria-controls='none' ref={addDescriptionForm} placeholder="Add Description"/>
                        </form>
                        <button onClick={addNewDescription}>Add Description</button>
                    </>
                    }
                </div>

                : null}

            
        
        </>
    )
}
