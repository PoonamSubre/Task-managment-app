import React, { useEffect, useState } from 'react';
import { getTasks, deleteTask, updateTaskStatus } from './api';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };

    fetchTasks();
  }, []);

  const handleDelete = async (taskId) => {
    await deleteTask(taskId);
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleStatusChange = async (taskId, status) => {
    await updateTaskStatus(taskId, status);
    setTasks(tasks.map(task => (task.id === taskId ? { ...task, status } : task)));
  };

  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <select
              value={task.status}
              onChange={(e) => handleStatusChange(task.id, e.target.value)}
            >
              <option value="todo">To Do</option>
              <option value="in_progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
