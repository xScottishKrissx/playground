import React,{useRef} from 'react'

export default function UserInput({columns, handleAddNewItem, columnId, instruction, handleResetBoard}) {

    const myForm = useRef()

    const resetBoard = () =>{
        // localStorage.clear()
        if(instruction === "item"){
            handleResetBoard(columnId)
        }else{
            console.log("Clearing Local Storage, reload page")
            localStorage.clear()
        }
    }

    
    const addNew = () =>{
        const formValue = myForm.current.value
        const grabLocalStorage = JSON.parse(localStorage.getItem("userData"))

        if(formValue.length  < 1) {
            alert("Field cannot be empty")
            return
        }
        
        if(instruction === "item"){
            Object.entries(grabLocalStorage).map(([id, items]) =>{
                if(id === columnId){
                    handleAddNewItem(id, formValue)
                }
            })

        }else{
            handleAddNewItem(formValue)
        }


        myForm.current.value = ""
    }


    const resetButtonText = instruction === "item" ? "Reset Board" : "Reset All"

  return (
    <div>
            <button onClick={addNew}>{"Add " + instruction}</button>
            <button onClick={resetBoard}>{resetButtonText}</button>

            <form>
                <input ref={myForm} />
            </form>
    </div>
  )
}
