import React from 'react';
import { updateTaskStatus, deleteTask } from '../api';
import './TaskItem.css';

const TaskItem = ({ task, onTaskUpdated, onTaskDeleted }) => {
  const handleStatusChange = async (e) => {
    const updatedTask = await updateTaskStatus(task.id, e.target.value);
    onTaskUpdated(updatedTask);
  };

  const handleDelete = async () => {
    await deleteTask(task.id);
    onTaskDeleted(task.id);
  };

  return (
    <div className="task-item">
      <div className="task-item-header">
        <h3>{task.title}</h3>
        <div className="task-item-actions">
          <select value={task.status} onChange={handleStatusChange}>
            <option value="todo">Todo</option>
            <option value="in_progress">In Progress</option>
            <option value="done">Done</option>
          </select>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
      <p>{task.description}</p>
    </div>
  );
};

export default TaskItem;
