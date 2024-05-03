import './App.css';
import KanbanBoard from './components/KanbanBoard';
import { useState } from 'react';
import Header from './components/Header';
import ActionBar from './components/ActionBar';


function App() {
  const [addedTask,setAddedTask]=useState({});
  const [editTaskForm,setEditTaskForm]=useState({});
  const [editedTask,setEditedTask]=useState({})

  return (
    <div className="App">
      <Header/>
      <ActionBar setAddedTask={setAddedTask}/>
      <KanbanBoard addedTask={addedTask} setEditTaskForm={setEditTaskForm} editTaskForm={editTaskForm} setEditedTask={setEditedTask} editedTask={editedTask}/>
    </div>
  );
}

export default App;
