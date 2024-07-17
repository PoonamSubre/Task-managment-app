import React, { useEffect, useState } from 'react';
import { getTasks } from '../api';
import TaskItem from './TaskItem';
import TaskForm from './TaskForm';
import './TaskList.css';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      const tasks = await getTasks();
      setTasks(tasks);
      setLoading(false);
    };
    fetchTasks();
  }, []);

  const handleTaskCreated = (task) => {
    setTasks([...tasks, task]);
  };

  const handleTaskUpdated = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const handleTaskDeleted = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="task-list">
      <div className="task-form-container">
        <TaskForm onTaskCreated={handleTaskCreated} />
      </div>
      <h2 className="task-list-title">Task List</h2>
      {loading ? (
        <p>Loading tasks...</p>
      ) : tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className="task-list-item">
            <TaskItem task={task} onTaskUpdated={handleTaskUpdated} onTaskDeleted={handleTaskDeleted} />
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
