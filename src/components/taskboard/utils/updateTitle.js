const updateTitle = (formValue, columnId, itemId, columns, setColumns) =>{
    const objectToUpdate = columns[columnId]

    if(columnId && !itemId) {
        // Change Board Title
        objectToUpdate.name = formValue
        setColumns({ ...columns,  [columnId]:{ ...objectToUpdate } })
        return
    }else{
        // Change Item Title
        const updateItem = objectToUpdate.items.map(item =>{
            if(item.id === itemId){ item.content = formValue } return item
        })
        setColumns({ ...columns,  [columnId]:{ ...objectToUpdate, items:updateItem } })
        return
    }        
}

export default updateTitle