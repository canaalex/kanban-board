import logo from './logo.svg';
import './App.css';
import KanbanBoard from './components/KanbanBoard';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import ActionBar from './components/ActionBar';
import AddModal from './components/AddModal';

function App() {
  const [addedTask,setAddedTask]=useState({});
  const [editTaskForm,setEditTaskForm]=useState({});
  const [editedTask,setEditedTask]=useState({})
  useEffect(()=>{
console.log('inside app',addedTask)
  },[addedTask])
  // useEffect(()=>{
  //   localStorage.clear();
  //     },[])
  return (
    <div className="App">
      <Header/>
      <ActionBar setAddedTask={setAddedTask}/>
      <KanbanBoard addedTask={addedTask} setEditTaskForm={setEditTaskForm} editTaskForm={editTaskForm} setEditedTask={setEditedTask} editedTask={editedTask}/>
    </div>
  );
}

export default App;
