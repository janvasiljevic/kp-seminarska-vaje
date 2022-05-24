import axios from 'axios';

const axiosInstace = axios.create({
  baseURL: import.meta.env.VITE_BE_ADDRESS,
  timeout: 1000,
  headers: {},
  withCredentials: true,
});

export default axiosInstace;
