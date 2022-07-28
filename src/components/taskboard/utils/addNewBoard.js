const addNewBoard = (formValue, columns, setColumns, uuid) =>{
    console.log("New Board !")
    const newBoard = {[uuid]:{ name:formValue, items:[] , position:columns.length + 1, }}
    const currentBoard = {...columns, ...newBoard}
    setColumns(currentBoard)
}

export default addNewBoard