import React, { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useState } from "react";
import Column from "./Column";
import { v4 as uuidv4 } from "uuid";
import EditModal from "./EditModal";

export default function KanbanBoard({
  addedTask,
  setEditTaskForm,
  editTaskForm,
  setEditedTask,
  editedTask,
}) {
  const [completed, setCompleted] = useState(() => {

    const storedCompleted = localStorage.getItem("done");

    return storedCompleted
      ? JSON.parse(storedCompleted)
      : [
          {
            id: uuidv4(),
            title: "Wake early",
            description: "Start your day with a fresh mind.",
            status: "done",
          },
          {
            id: uuidv4(),
            title: "Make dinner",
            description:
              "Prepare a delicious meal for yourself or your family.",
            status: "done",
          },
          {
            id: uuidv4(),
            title: "Sleep Early",
            description:
              "Get a good night's sleep to rejuvenate for the next day.",
            status: "done",
          },
        ];
  });
  const [todo, setTodo] = useState(() => {

    const storedTodo = localStorage.getItem("todo");

    return storedTodo
      ? JSON.parse(storedTodo)
      : [
          {
            id: uuidv4(),
            title: "Go to work",
            description: "Start your workday and be productive.",
            status: "todo",
          },
          {
            id: uuidv4(),
            title: "Drink a glass of water",
            description: "Stay hydrated and maintain good health.",
            status: "todo",
          },
          {
            id: uuidv4(),
            title: "Gym time",
            description: "Exercise to keep yourself fit and healthy.",
            status: "todo",
          },
        ];
  });
  const [doing, setDoing] = useState(() => {

    const storedDoing = localStorage.getItem("doing");

    return storedDoing
      ? JSON.parse(storedDoing)
      : [
          {
            id: uuidv4(),
            title: "Help brother",
            description:
              "Assist your brother with any tasks or challenges he may have.",
            status: "doing",
          },
          {
            id: uuidv4(),
            title: "Clean the car",
            description: "Keep your car clean and well-maintained.",
            status: "doing",
          },
          {
            id: uuidv4(),
            title: "Call the Plumber",
            description:
              "Arrange for a plumber to fix any plumbing issues in your home.",
            status: "doing",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("done", JSON.stringify(completed));
    localStorage.setItem("todo", JSON.stringify(todo));
    localStorage.setItem("doing", JSON.stringify(doing));
  }, [completed, todo, doing]);

  useEffect(() => {
    if (!addedTask) return;
   
    if (addedTask.status === "todo") {
      setTodo((prevTodo) => {
        const newTodoTask = { ...addedTask, id: uuidv4() };
        return [...prevTodo, newTodoTask];
      });

    } else if (addedTask.status === "doing") {
      setDoing((prevDoing) => {
        const newDoingTask = { ...addedTask, id: uuidv4() };
        return [...prevDoing, newDoingTask];
      });

    } else if (addedTask.status === "done") {
      setCompleted((prevCompleted) => {
        const newCompleteTask = { ...addedTask, id: uuidv4(), status: "done" };
        return [...prevCompleted, newCompleteTask];
      });
    }
  }, [addedTask]);

  useEffect(() => {
    if (!editedTask) return;
    console.log("edited task", editedTask);

    if (editedTask.status === "todo") {
     
      setDoing((prevDoing) =>
        prevDoing.filter((task) => task.id !== editedTask.id)
      );
      setCompleted((prevCompleted) =>
        prevCompleted.filter((task) => task.id !== editedTask.id)
      );
      setTodo((prevTodo) => {
        const existingTaskIndex = prevTodo.findIndex(
          (task) => task.id === editedTask.id
        );
        if (existingTaskIndex !== -1) {
          // Update the existing task in the doing column
          const updatedTodo = [...prevTodo];
          updatedTodo[existingTaskIndex] = editedTask;
          return updatedTodo;
        } else {
          // Add the edited task to the doing column
          return [...prevTodo, editedTask];
        }
      });
    } else if (editedTask.status === "doing") {
      // Remove the task from the todo column
      setTodo((prevTodo) =>
        prevTodo.filter((task) => task.id !== editedTask.id)
      );
      setCompleted((prevCompleted) =>
        prevCompleted.filter((task) => task.id !== editedTask.id)
      );
      setDoing((prevDoing) => {
        const existingTaskIndex = prevDoing.findIndex(
          (task) => task.id === editedTask.id
        );
        if (existingTaskIndex !== -1) {
          // Update the existing task in the doing column
          const updatedDoing = [...prevDoing];
          updatedDoing[existingTaskIndex] = editedTask;
          return updatedDoing;
        } else {
          // Add the edited task to the doing column
          return [...prevDoing, editedTask];
        }
      });

    } else if (editedTask.status === "done") {
      setTodo((prevTodo) =>
        prevTodo.filter((task) => task.id !== editedTask.id)
      );
      setDoing((prevDoing) =>
        prevDoing.filter((task) => task.id !== editedTask.id)
      );
      setCompleted((prevCompleted) => {
        const existingTaskIndex = prevCompleted.findIndex(
          (task) => task.id === editedTask.id
        );
        if (existingTaskIndex !== -1) {
          // Update the existing task in the doing column
          const updatedCompleted = [...prevCompleted];
          updatedCompleted[existingTaskIndex] = {
            ...editedTask,
            status: "done",
          };
          return updatedCompleted;
        } else {
          // Add the edited task to the doing column
          return [...prevCompleted, { ...editedTask, status: "done" }];
        }
      });
    }
  }, [editedTask]);

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
     
      let task = findItemById(draggableId, getColumnById(source.droppableId));
      console.log('task',task);

      if (!task) return;
     
      if (destination.droppableId === "1") {
        task = { ...task, status: "todo" };
      } else if (destination.droppableId === "2") {
        task = { ...task, status: "doing" };
      } else if (destination.droppableId === "3") {
        task = { ...task, status: "done" };
      }

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

  function deleteTask(deletedTask) {
    setTodo((prevTodo) =>
      prevTodo.filter((task) => task.id !== deletedTask.id)
    );
    setDoing((prevDoing) =>
      prevDoing.filter((task) => task.id !== deletedTask.id)
    );
    setCompleted((prevCompleted) =>
      prevCompleted.filter((task) => task.id !== deletedTask.id)
    );
  }

  return (
    <div className="container mb-5">
      <EditModal editTaskForm={editTaskForm} setEditedTask={setEditedTask} />

      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="row">
          <div className="col-4">
            <Column
              title={"To Do"}
              tasks={todo}
              id={"1"}
              setEditTaskForm={setEditTaskForm}
              deleteTask={deleteTask}
            />
          </div>
          <div className="col-4">
            <Column
              title={"Doing"}
              tasks={doing}
              id={"2"}
              setEditTaskForm={setEditTaskForm}
              deleteTask={deleteTask}
            />
          </div>
          <div className="col-4">
            <Column
              title={"Done"}
              tasks={completed}
              id={"3"}
              setEditTaskForm={setEditTaskForm}
              deleteTask={deleteTask}
            />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}
