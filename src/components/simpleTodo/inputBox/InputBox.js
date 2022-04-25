import { forwardRef } from "react";

import './inputBox.css'

export const InputBox = forwardRef((props,ref) => {

    return (
        <>
            <div className="simpleTodo__formContainer d-flex w-100">


                <form className="simpleTodo__form border-0 lh-lg w-100">
                    <label htmlFor="itemEntry"></label>
                    <input ref={ref} type="text" name="itemEntry" placeholder="Get started..."/>
                </form>

                {!props.edit ? 
                    <button title="Add To List" onClick={props.addItem}><span className="material-icons">add_circle_outline</span></button>
                    : 
                    <>
                        <button onClick={props.submitEdit} title="Confirm Edit"><span className="material-icons">check</span></button>
                        <button onClick={props.cancelEdit} title="Cancel Edit"><span className="material-icons">close</span></button>
                    </>
                }

            </div>
        </>
    )
})

export default InputBox;