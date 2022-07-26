import React,{ useRef} from 'react'

export default function ItemHeader({updateTitle, columnId, itemId, content}) {

    const changeTitleForm = useRef()
    
    const changeTitle = () =>{
        const formValue = changeTitleForm.current.value
        updateTitle(formValue, columnId, itemId)
    }

  return (
    <div className='itemWindowItemHeader'>
        <form>
            <h2>
                <input maxLength={20} id="formTitle" ref={changeTitleForm} onChange={changeTitle} value={content} />
            </h2>    
        </form>
    </div>
  )
}
