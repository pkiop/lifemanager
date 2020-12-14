import axios from 'axios';

const instance = axios.create({
  // withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
  },
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location.href = '/login';
    } else {
      window.location.href = '/not-found';
    }
    return Promise.reject(error);
  },
);
export default instance;
