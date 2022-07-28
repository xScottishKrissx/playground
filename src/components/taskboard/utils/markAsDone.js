const markAsDone = (itemId, columnId, setStatus, columns, setColumns) =>{
    const objectToUpdate = columns[columnId]

    const updateItem = objectToUpdate.items.map(item =>{
        if(item.id === itemId){ item.status = setStatus } return item
    })

    setColumns({ ...columns,  [columnId]:{ ...objectToUpdate, items:updateItem } })
    
}

export default markAsDone