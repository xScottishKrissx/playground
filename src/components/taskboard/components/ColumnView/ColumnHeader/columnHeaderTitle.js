import React,{useRef, useState} from 'react'

export default function ColumnHeaderTitle({updateTitle, columnId, itemId, content}) {

    const changeColumnTitle = useRef()

    const [formFocus, setFormFocus] = useState(false)

    const changeTitle = () =>{
        const formValue = changeColumnTitle.current.value
        updateTitle(formValue, columnId, "")
    }

    return (
        <div className='columnHeaderTitle'>
            <form>
                <h2>
                    {formFocus === true ? 
                        <span>
                            <input maxLength={20}  onBlur={()=>setFormFocus(false)} className="columnTitle" ref={changeColumnTitle} onChange={changeTitle} value={content} />

                            <span onClick={()=>setFormFocus(false)} title="Save any changes and close window" className="material-icons-outlined">save</span>
                        </span>
                    :
                        <span className="columnTitle" onClick={()=>setFormFocus(true)}> {content} </span>
                    }
                </h2>    
            </form>
        </div>
    )
}
