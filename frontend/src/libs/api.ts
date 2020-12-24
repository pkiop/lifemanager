import axios from './axios';

export const getOneUser = (id: number) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');

export const getUsersByAccessToken = () => axios.get(`${process.env.REACT_APP_APISERVER_HOST}/api/user/current`);

export const getTokenAndUser = (code: string) => axios.get(
  `${process.env.REACT_APP_APISERVER_HOST}/api/auth/github/getToken?code=${code}`,
);

export const authentication = () => axios.get(
  `${process.env.REACT_APP_APISERVER_HOST}/auth/authentication`,
);

export const getTimeRecode = () => axios.get(
  `${process.env.REACT_APP_APISERVER_HOST}/api/timeRecode`,
);

export const postTimeRecode = (payload: any) => axios.post(
  `${process.env.REACT_APP_APISERVER_HOST}/api/timeRecode`, payload,
);
