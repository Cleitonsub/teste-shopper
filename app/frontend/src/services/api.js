import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const api = axios.create({ baseURL: `http://localhost:${process.env.APP_PORT}` });

export const getAllProducts = async () => {
  const data = await api.get('/products')
    .then((response) => response.data);
  return data;
};

export default api;
