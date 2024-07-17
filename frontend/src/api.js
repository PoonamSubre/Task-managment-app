import axios from 'axios';

const API_URL = 'https://task-managment-app-18.onrender.com/api/tasks';

export const getTasks = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(API_URL, task);
  return response.data;
};

export const updateTaskStatus = async (taskId, status) => {
  const response = await axios.put(`${API_URL}/${taskId}`, { status });
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_URL}/${taskId}`);
  return response.data;
};
