import { forwardRef, useImperativeHandle } from "react";

export const EmptyFieldWarningMessage = forwardRef((props,ref) =>{
    return(
        <div ref={ref} className="simpleTodo__emptyFieldWarning">
            <p className="d-flex">
                <span className="material-icons">priority_high</span>
                <strong>oops, this field <span className="text-decoration-underline">cannot</span> be empty</strong>
            </p>
        </div>
    )
});

export default EmptyFieldWarningMessage;