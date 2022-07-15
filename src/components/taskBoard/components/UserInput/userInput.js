import React,{useRef} from 'react'

export default function UserInput({columns, handleAddNewItem, columnId, instruction}) {

    const myForm = useRef()

    const resetBoard = () =>{
        console.log("Clearing Local Storage, reload page")
        localStorage.clear()
    }

    
    const addNew = () =>{
        const formValue = myForm.current.value
        const grabLocalStorage = JSON.parse(localStorage.getItem("userData"))

        if(formValue.length  < 1) {
            alert("Field cannot be empty")
            return
        }
        
        if(instruction === "newItem"){
            console.log("New Item")
            Object.entries(grabLocalStorage).map(([id, items]) =>{
                if(id === columnId){
                    handleAddNewItem(id, formValue)
                }
            })

        }else{
            console.log("New Board")
            handleAddNewItem(formValue)
        }


        myForm.current.value = ""
    }


  return (
    <div>
            <button onClick={addNew}>{"Add " + instruction}</button>
            <button onClick={resetBoard}>Reset</button>

            <form>
                <input ref={myForm} />
            </form>
    </div>
  )
}
