import React, { useState } from 'react';
import { createTask } from '../api';
import './TaskForm.css';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, status: 'todo' };
    const createdTask = await createTask(newTask);
    onTaskCreated(createdTask);
    setTitle('');
    setDescription('');
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <h2>Add Task</h2>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      </div>
      <div>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
