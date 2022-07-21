import React,{useRef, useState} from 'react'

import loading from '../../../../spinner.gif'

export default function ItemWindow({itemWindowState, item, closeItemWindow, columnId, addDescription}) {

    const {id, content, description} = item
    
    const addDescriptionForm = useRef()
    const[isFormFocused, setIsFormFocused] = useState(false)
    
    const addNewDescription = () =>{
        const formValue = addDescriptionForm.current.value

        // Do something with form when typing
        console.log(addDescriptionForm)
        if(document.activeElement === addDescriptionForm.current){
            console.log("Do Something")
        }

        // if(formValue.length < 1) return

        addDescription(formValue, columnId, itemWindowState.itemId)
        addDescriptionForm.current.value = ""
    }

    
    return (
        <>

            {itemWindowState.itemId === id ? 
                
                <div className='itemWindow' >
                    <button onClick={closeItemWindow}>Close</button>
                    <h2>{content}</h2>    
                    {/* <p>{description}</p> */}

                    <hr />
                    {description.length > 0 ?  
                        <>
                            <form  >
                                <textarea onClick={()=>setIsFormFocused(true)} ref={addDescriptionForm} onChange={addNewDescription} value={description} />
                            </form>

                            { isFormFocused ? 
                                <span onClick={()=>setIsFormFocused(false)}><img src={loading} />Saving</span> 
                                : 
                                <span >Description Saved</span> 
                            }

                        </>
                    : 
                        <>
                            <form>
                                <textarea aria-controls='none' onChange={addNewDescription} ref={addDescriptionForm} placeholder="Add Description"/>
                            </form>
                            <span>Add Description</span>
                        </>
                    }
                </div>

                : null}

            
        
        </>
    )
}
