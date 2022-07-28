const addDescription = (formValue, columnId, itemId, columns, setColumns) =>{
    const objectToUpdate = columns[columnId]

    const updateItem = objectToUpdate.items.map(item =>{
        if(item.id === itemId ){ item.description = formValue }
        return item
    })
    setColumns({ ...columns,  [columnId]:{ ...objectToUpdate, items:updateItem } })
}

export default addDescription