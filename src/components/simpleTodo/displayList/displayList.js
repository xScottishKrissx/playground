import './displayList.css'
export const DisplayList = (props) => {
    const mapItems = props.items.map((x,index) => {
        return(
            <div key={index} className="simpleTodo__singleItem d-flex mt-3">

                <p className="w-75 m-0 p-0">{x}</p>

                <div  className="simpleTodo__singleItemButtons d-flex justify-content-evenly align-items-center w-25">

                    <span 
                        role="button" 
                        onClick={()=>{ props.startEdit(index) } } 
                        className="material-icons simpleTodo__editButton text-info">
                        edit
                    </span>

                    <span 
                        role="button" 
                        onClick={()=> {props.handleDelete(index, 1)}} 
                        className="material-icons simpleTodo__deleteButton text-danger">
                        delete
                    </span>
                </div>

                
            </div>
        )
    })
    return mapItems
}

export default DisplayList;