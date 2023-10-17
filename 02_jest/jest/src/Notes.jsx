import React, { useState } from 'react'
import Note from './Note';

const Notes = () => {
  const [important, setImportant] = useState(false);

  const toggleImportance = () => setImportant(!important)
  
  return (
    <div>
         <Note
        note={
        {
          important: important,
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa tenetur rerum dolorem molestias rem, adipisci eligendi iste facilis distinctio dolore corrupti explicabo voluptate provident sequi in animi est illum quibusdam!"
        }}
        toggleImportance={toggleImportance}
      />
    </div>
  )
}

export default Notes