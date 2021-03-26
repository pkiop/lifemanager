import axios from './axios';

// TODO: Delete
export const getOneUser = (id: number) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

// TODO: Delete
export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');

const apiUrl = process.env.REACT_APP_APISERVER_HOST;

export const getUsersByAccessToken = () => axios.get(`${apiUrl}/api/user/current`);

export const getTokenAndUser = (code: string) => axios.get(
  `${apiUrl}/api/auth/github/getToken?code=${code}`,
);

export const authentication = () => axios.get(`${apiUrl}/auth/authentication`);

export const getTimeRecode = () => axios.get(`${apiUrl}/api/timeRecode`);

export const postTimeRecode = (payload: any) => axios.post(`${apiUrl}/api/timeRecode`, payload);
