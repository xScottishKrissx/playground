import React,{useRef} from 'react'

import './userInput.css'

export default function UserInput({columns, handleAddNewItem, columnId, instruction, handleResetBoard}) {

    const myForm = useRef()





    
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

    const itemStyle={
        color:"red"
    }

    const boardStyle={
        backgroundColor:"#00000029",
        boxShadow:"2px 2px 0px 0px #a1a1a1",
        justifyContent:"center",
        margin:"10px",
        minHeight:"150px",
        padding:"10px",
        position:"relative",
        minWidth:"250px"
    }

    const resetButtonText = instruction === "item" ? "Reset Board" : "Reset All"
    const style = instruction === "item" ? itemStyle : boardStyle

    return (
        <div className='userInputContainer' style={style}>
            <form>
                <input maxLength={25} ref={myForm} placeholder={"enter new " + instruction + " name"}/>
            </form>

            {instruction === "item" ?
                <button onClick={addNew}>{"Add " + instruction}</button>
                :
                <>
                    <button onClick={addNew}>{"Add " + instruction}</button>
                    {/* <button onClick={resetBoard}>{resetButtonText}</button> */}
                </>
            
            }

        </div>
    )
}
