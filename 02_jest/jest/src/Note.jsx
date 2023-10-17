import React from 'react'

const Note = ({ note, toggleImportance}) => {
  const label = note.important 
    ? "make not important"
    : "make important"

  return (
    <div className='note'>
      <div>
        { note.content }
      </div>
      <button onClick={toggleImportance}>{ label }</button>
    </div>
  )
}

export default Note;