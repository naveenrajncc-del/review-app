import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

export const reviewCodeAPI = async (code: string) => {
  const res = await api.post('/review', { code });

  if (!res?.data) {
    throw new Error('Invalid response');
  }

  return res.data;
};