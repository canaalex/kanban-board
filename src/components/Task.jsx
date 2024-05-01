import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

export default function Task({ task, index ,setEditTaskForm,deleteTask}) {
  return (
    <Draggable draggableId={`${task.id}`} key={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          className='card glass-effect'
          {...provided.dragHandleProps}
          {...provided.draggableProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div className='card-body bg-black'>
            <div className="d-flex justify-content-between ">
              <div className="text-left">
                <h5 className="card-title text-break">{task.title}</h5>
              </div>
              <div>
                <button
                  type="button"
                  className="btn glass-effect text-white border-0 p-1 pr-2 pl-2"
                  data-toggle="modal"
                  data-target="#editModal"
                  onClick={()=>{setEditTaskForm(task)}}
                >
                  <MdEdit />
                </button>
                <button
                  type="button"
                  className="btn glass-effect text-white border-0 p-1 pr-2 pl-2 ml-2"
                  onClick={()=>{deleteTask(task)}}
                >
                  <MdDelete />
                </button>
              </div>
              
            </div>
            <p className="card-text text-left text-break pt-2">{task.description}</p>
          </div>
          {provided.placeholder}
        </div>
      )}
    </Draggable>
  );
}


