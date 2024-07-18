import axios from 'axios';

const API_URL = 'https://task-managment-app-19.onrender.com/api';

export const getTasks = async () => {
  const response = await axios.get(`${API_URL}/tasks`);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(`${API_URL}/tasks`, task);
  return response.data;
};

export const updateTaskStatus = async (taskId, status) => {
  const response = await axios.put(`${API_URL}/tasks/${taskId}`, { status });
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await axios.delete(`${API_URL}/tasks/${taskId}`);
  return response.data;
};
