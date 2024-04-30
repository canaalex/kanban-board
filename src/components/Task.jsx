import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export default function Task({task,index}) {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
        {(provided,snapshot)=>(
            <div className='card glass-effect' {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} isDragging={snapshot.isDragging}>
              <div className='card-body bg-black '>
              <h5 class="card-title">{task.title}</h5>
              <p class="card-text">{task.description}</p>
              </div>
                {/* <div style={{display:"flex",justifyContent:'start',padding:2}}>
                    <span>
                        {task.id}
                    </span>

                </div> */}
                {/* <div style={{display:"flex",justifyContent:'center',padding: 2}}>
                <span>
                        {task.title}
                    </span>
                </div> */}
              {provided.placeholder}
            </div>
        )

        }

    </Draggable>
  )
}
