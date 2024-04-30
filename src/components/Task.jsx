import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function Task({task,index}) {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
        {(provided,snapshot)=>(
            <div className='card glass-effect' {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} isDragging={snapshot.isDragging}>
              <div className='card-body bg-black '>
              <h5 className="card-title">{task.title}</h5>
              <p className="card-text">{task.description}</p>
              </div>
               
              {provided.placeholder}
            </div>
        )

        }

    </Draggable>
  )
}
