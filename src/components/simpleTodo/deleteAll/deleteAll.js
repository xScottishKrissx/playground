import { forwardRef } from "react";
import './deleteAll.css'

export const DeleteAll = forwardRef((props,ref) =>{
    return(
        <>
            {props.itemsLength > 1 ?

                <div className="simpleTodo__deleteAllContainer mb-4 top-0 w-100 ">
                    
                    <button className="simpleTodo__deleteAllButton border-0 d-flex align-items-center justify-content-center p-2 w-100"  onClick={props.confirmDelete}>
                        <span className="material-icons">delete_sweep</span>Delete All
                    </button>

                    <div className="simpleTodo__confirmDeleteAllContainer border-0 align-items-center justify-content-evenly w-100" ref={ref} >
                        <span className="bg-danger text-white" id="simpleTodo__confirmDeleteAllButton" role="button" onClick={props.handleDelete}>Confirm</span>
                        <span className="bg-secondary text-white" id="simpleTodo__confirmCancelButton" role="button" onClick={props.confirmDelete}>Cancel</span>
                    </div>
                </div>

            :null}  
        </>
    )
});

export default DeleteAll;