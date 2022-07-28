import React,{useRef} from 'react'

export default function ColumnHeaderTitle({updateTitle, columnId, itemId, content}) {

    console.log(columnId)

    const changeColumnTitle = useRef()
    
    const changeTitle = () =>{
        const formValue = changeColumnTitle.current.value
        updateTitle(formValue, columnId, "")
    }

  return (
    <div className='columnHeaderTitle'>
        <form>
            <h2>
                <input maxLength={20} id="formTitle" ref={changeColumnTitle} onChange={changeTitle} value={content} />
            </h2>    
        </form>
    </div>
  )
}
