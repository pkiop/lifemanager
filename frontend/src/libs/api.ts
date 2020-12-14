import axios from './axios';

// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

export const getOneUser = (id: number) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);

export const getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');

export const getUsersByAccessToken = () => axios.get(`${process.env.REACT_APP_APISERVER_HOST}/api/user/current`);

export const getTokenAndUser = (code: string) => axios.get(
  `${process.env.REACT_APP_APISERVER_HOST}/api/auth/github/getToken?code=${code}`,
);

export const authentication = () => axios.get(
  `${process.env.REACT_APP_APISERVER_HOST}/auth/authentication`,
);
