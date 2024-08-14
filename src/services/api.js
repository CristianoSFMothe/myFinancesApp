import axios from 'axios';

const api = axios.create({
  // baseURL: 'http://localhost:3333',
  baseURL: 'http://172.18.0.1:3333',
});

export default api;
