<<<<<<< HEAD
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tasks';

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
=======
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/tasks';

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
>>>>>>> 267850fb757d63fd6f88ccb3c91870b8ff4ba5c2
