import React, {useRef} from 'react'




export default function SetVisibilityButton(props) {

    const {numberHidden} = props

    const hideParent = (e) =>{

        // Add the hide element class to the project div
        const getParentElement = e.currentTarget.parentElement.parentElement
        getParentElement.classList.add("hideElement")


        // Update the main component to display the current number of elements with the hideElement class
        let count = document.querySelectorAll('.hideElement').length
        numberHidden(count)
    }


  return (
    <div onClick={(e)=>hideParent(e)}>
        <span className="material-icons">visibility</span>
    </div>
  )
}
