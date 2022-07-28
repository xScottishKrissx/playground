const resetBoard = (columnId, columns, setColumns) =>{
    // console.log("Reset Board" + columnId)
    const objectToUpdate = columns[columnId]
    setColumns({ ...columns, [columnId] : {...objectToUpdate, items:[]} })
}

export default resetBoard