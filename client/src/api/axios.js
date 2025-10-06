import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://e-commerce-fruits-backend.vercel.app', 
  withCredentials: true,
});

export default instance;
