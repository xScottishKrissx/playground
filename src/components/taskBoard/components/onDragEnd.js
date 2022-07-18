import { configure } from "@testing-library/react";

const onDragEnd = (result, columns, setColumns) => {

    // console.log(result)
    if(!result.destination) return;
    const {source, destination, type} = result

    // Re arrange columns
    if(type === 'column'){
        const currentColumnOrder = Object.entries(columns)
        
        const [removed] = currentColumnOrder.splice(source.index, 1)
        currentColumnOrder.splice(destination.index, 0, removed)
        
        const newColumnOrder = Object.fromEntries(currentColumnOrder)
        setColumns(newColumnOrder)
        return
    }

    // Items within columns
    if(source.droppableId !== destination.droppableId){
        // Move to New Column
        const sourceColumn = columns[source.droppableId]
        const destColumn = columns[destination.droppableId]

        const sourceItems = [...sourceColumn.items]
        const destItems = [...destColumn.items]

        const [removed] = sourceItems.splice(source.index, 1)
        destItems.splice(destination.index, 0, removed)

        setColumns({
            ...columns,
            [source.droppableId]:{
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]:{
                ...destColumn,
                items: destItems
            }
        })
        
    } else{
        // Reorder In Column
        const column = columns[source.droppableId]
        const copiedItems = [...column.items]

        const [removed] = copiedItems.splice(source.index, 1)
        copiedItems.splice(destination.index, 0, removed)

        setColumns({
            ...columns,
            [source.droppableId]:{
                ...column,
                items:copiedItems
            }
        })
    }
}

export default onDragEnd