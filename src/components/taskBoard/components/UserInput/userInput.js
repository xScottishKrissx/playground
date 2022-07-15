import React,{useRef} from 'react'

export default function UserInput({columns, addToUnassigned}) {

    const myForm = useRef()

    const resetBoard = () =>{
        // console.log("Clearing Local Storage, reload page")
        // localStorage.clear()
    }

    
    const addNew = () =>{
        const formValue = myForm.current.value

        const grabLocalStorage = JSON.parse(localStorage.getItem("userData"))

        Object.entries(grabLocalStorage).map(([id, items]) =>{
            if(items.name === "Unassigned"){
                addToUnassigned(id, items.name, formValue)
            }
        })


        myForm.current.value = ""
    }


  return (
    <div>
            <button onClick={addNew}>Add</button>
            <button onClick={resetBoard}>Reset</button>

            <form>
                <input ref={myForm} />
            </form>
    </div>
  )
}
