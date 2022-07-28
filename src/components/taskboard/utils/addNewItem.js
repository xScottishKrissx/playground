const addNewItem = (id, formValue, columns, setColumns, uuidv4) => {
    // console.log(columns[id].items)
    const currentFirstColumnItems = columns[id].items
    const addNewItemToCurrentFistColItems = [...currentFirstColumnItems].concat({'id': uuidv4 , 'content': formValue, 'status':"open", 'description': ''})
    const objectToUpdate = columns[id]
    setColumns({ ...columns, [id]:{ ...objectToUpdate, items:addNewItemToCurrentFistColItems, } })
}

export default addNewItem