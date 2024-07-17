import React from 'react';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>Task Management App</h1>
      <TaskList />
    </div>
  );
}

export default App;
