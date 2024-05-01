import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import Task from './Task'

export default function Column({ title, tasks, id, setEditTaskForm ,deleteTask}) {
  return (
    <div className="container column-background p-3 rounded d-flex flex-column">
      <h4 className='text-white align-self-start ml-3'>{title}</h4>
      <Droppable droppableId={id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="task-list p-3"
          >
            {tasks.map((task, index) => (
              <Task key={task.id} task={task} index={index} setEditTaskForm={setEditTaskForm} deleteTask={deleteTask} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}


