import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import Column from "./Column";
import { v4 as uuidv4 } from "uuid";

export default function KanbanBoard({addedTask}) {
  const [completed, setCompleted] = useState([
    { id: 7, title: "Wake early", description: "Start your day with a fresh mind.", status: "completed" },
    { id: 8, title: "Make dinner", description: "Prepare a delicious meal for yourself or your family.", status: "completed" },
    { id: 9, title: "Sleep at 11", description: "Get a good night's sleep to rejuvenate for the next day.", status: "completed" },
  ]);

  const [todo, setTodo] = useState([
    { id: 1, title: "Go to work", description: "Start your workday and be productive.", status: "todo" },
    { id: 2, title: "Drink a glass of water", description: "Stay hydrated and maintain good health.", status: "todo" },
    { id: 3, title: "Gym time", description: "Exercise to keep yourself fit and healthy.", status: "todo" },
  ]);

  const [doing, setDoing] = useState([
    { id: 4, title: "Help brother", description: "Assist your brother with any tasks or challenges he may have.", status: "doing" },
    { id: 5, title: "Clean the car", description: "Keep your car clean and well-maintained.", status: "doing" },
    { id: 6, title: "Call the Plumber", description: "Arrange for a plumber to fix any plumbing issues in your home.", status: "doing" },
  ]);
  useEffect(() => {
    if(!addedTask) return;
    console.log('added task',addedTask);
    if (addedTask.status === 'todo') {
      const newTodoTask = { ...addedTask, id: uuidv4() }; 
      setTodo([...todo, newTodoTask]);
    }
    else if(addedTask.status==="doing"){
      const newDoingTask = { ...addedTask, id: uuidv4() }; 
      setDoing([...doing, newDoingTask]);
    }
    else if(addedTask.status==="done"){
      const newCompleteTask = { ...addedTask, id: uuidv4(),status:"completed" }; 
      setCompleted([...completed, newCompleteTask]);
    }
  }, [addedTask, todo]);
const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return; // Dropping outside a droppable area
    if (source.droppableId === destination.droppableId) {
      // Dragging within the same column
      const updatedColumn = reorderItems(
        getColumnById(source.droppableId),
        source.index,
        destination.index
      );
      updateColumn(updatedColumn, source.droppableId);
    } else {
      // Moving to a different column
      const task = findItemById(draggableId, getColumnById(source.droppableId));
      if (!task) return; // Task not found in the source column
  
      const updatedSourceColumn = removeItemById(
        draggableId,
        getColumnById(source.droppableId)
      );
      updateColumn(updatedSourceColumn, source.droppableId);
  
      const updatedDestinationColumn = insertItemAtPosition(
        getColumnById(destination.droppableId),
        task,
        destination.index
      );
      updateColumn(updatedDestinationColumn, destination.droppableId);
    }
  };
  
  const reorderItems = (items, startIndex, endIndex) => {
    const result = Array.from(items);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  
  const insertItemAtPosition = (items, item, index) => {
    const result = Array.from(items);
    result.splice(index, 0, item);
    return result;
  };
  
  // Update the state of the column based on its ID
  const updateColumn = (updatedColumn, columnId) => {
    switch (columnId) {
      case "1":
        setTodo(updatedColumn);
        break;
      case "2":
        setDoing(updatedColumn);
        break;
      case "3":
        setCompleted(updatedColumn);
        break;
      default:
        break;
    }
  };
  
  // Get the column based on its ID
  const getColumnById = (columnId) => {
    switch (columnId) {
      case "1":
        return todo;
      case "2":
        return doing;
      case "3":
        return completed;
      default:
        return [];
    }
  };
  

  function findItemById(id, array) {
    return array.find((item) => item.id == id);
  }

  function removeItemById(id, array) {
    return array.filter((item) => item.id != id);
  }

  return (
    <div className="container">
    
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="row">
          <div className="col-4">
            <Column title={"To Do"} tasks={todo} id={"1"} />
          </div>
          <div className="col-4">
            <Column title={"Doing"} tasks={doing} id={"2"} />
          </div>
          <div className="col-4">
            <Column title={"Done"} tasks={completed} id={"3"} />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
