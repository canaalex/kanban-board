import logo from './logo.svg';
import './App.css';
import KanbanBoard from './components/KanbanBoard';
import { useState } from 'react';
import Header from './components/Header';
import ActionBar from './components/ActionBar';

function App() {
  return (
    <div className="App">
      <Header/>
      <ActionBar/>
      <KanbanBoard/>
    </div>
  );
}

export default App;
