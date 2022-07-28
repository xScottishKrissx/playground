const deleteItem = (itemId, columnId, columns, setColumns) =>{
    const objectToUpdate = columns[columnId]
    const filterItems = objectToUpdate.items.filter(item => item.id !== itemId)
    setColumns({ ...columns,  [columnId]:{ ...objectToUpdate, items:filterItems } })
}

export default deleteItem