import React,{useRef, useState, useEffect} from 'react'

import './userInput.css'

export default function UserInput({handleAddNewItem, columnId, instruction}) {

    const [formFocus, setFormFocus] = useState(false)
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

    // useEffect(()=>{
    //     window.addEventListener('keydown', detectKeyDown, true)
    // },[])


    const detectKeyDown = (e) =>{
        if(formFocus === true && e.key === "Enter"){
            e.preventDefault()
            addNew()
        }
    }

    const boardStyle={
        backgroundColor:"#00000029",
        boxShadow:"2px 2px 0px 0px #a1a1a1",
        justifyContent:"center",
        margin:"10px",
        minHeight:"150px",
        minWidth:"250px",
        padding:"10px",
        position:"relative",
    }

    const buttonBright = { opacity:1 }
    const buttonDull = { opacity:0.5 }

    const style = instruction === "item" ? null : boardStyle
    const buttonStyle = formFocus ? buttonBright : buttonDull

    return (
        <div className='userInputContainer' style={style}>
            <form>
                <input 
                    maxLength={25} 
                    onFocus={()=>setFormFocus(true)} 
                    onBlur={()=>setFormFocus(false)} 
                    placeholder={"enter new " + instruction + " name"}
                    ref={myForm} 
                    onKeyDown={detectKeyDown}
                   
                />
            </form>
            <button style={buttonStyle} onClick={addNew}>{"Add " + instruction}</button>  
        </div>
    )
}
