const deleteColumn = (columnToDeleteId, columns, setColumns) =>{
    // Convert to array
    const currentColumns = Object.entries(columns)
    // Filter for key
    const filterColumn = currentColumns.filter(column => column[0] !== columnToDeleteId)
    // Filter back to object
    const newColumns = Object.fromEntries(filterColumn)
    // set state...
    setColumns(newColumns)
}

export default deleteColumn