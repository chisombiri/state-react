import React from 'react'

const Tasks = ({ name, isCompleted }) => {
    if (isCompleted) {
        return <li>{name} ✔</li>
    }

  return (
    <li>{name}</li>
  )
}

export default Tasks