import React from 'react'
import Tasks from './Tasks'

const TaskList = () => {
  return (
    <div>
        <h2>List of Todos</h2>
        <ul>
            <Tasks name="Wash car" isCompleted={true} />
            <Tasks name="Wash car" isCompleted={false} />
            <Tasks name="Wash car" isCompleted={true} />
        </ul>
    </div>
  )
}

export default TaskList