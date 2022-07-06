import React,{useRef} from 'react'

export default function UserInput({items, counter, setItems, setLocalStorage, setCounter}) {

    const myForm = useRef()

    const resetBoard = () =>{
        console.log("Clearing Local Storage, reload page")
        localStorage.clear()
    }

    const addNew = () =>{
        const formValue = myForm.current.value

        if(formValue.length > 1){
            let itemsArray = items || []
            itemsArray.push({
                "id": "item" + counter.toString() ,
                "text": formValue,
                "board":"unassigned"
            })
            setItems(itemsArray)
            setLocalStorage("tbored-items", items)
        }
        setCounter(counter + 1)
        localStorage.setItem("counter", JSON.stringify(counter))
        // console.log(items)


        // Clear Input After Saving
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
