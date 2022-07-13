import React from 'react'

export default function Task({tasks}) {
  return (
    <div className='taskContainer'>
        <div className='taskItem'>{tasks.content}</div>

    </div>
  )
}
