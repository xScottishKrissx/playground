import React from 'react'

export default function ItemStatus({itemStatus, itemId, columnId, markAsDone}) {
  return (
    <>
        {itemStatus === "open" ? 
            <span onClick={()=>markAsDone(itemId, columnId, "done")} title="Mark as Done" className="material-icons-outlined itemCheck">radio_button_unchecked</span>
        :
            <span onClick={()=>markAsDone(itemId, columnId, "open")} title="Mark as Open" className="material-icons-outlined itemCheck">check_circle_outline</span>
        }
    </>
  )
}
