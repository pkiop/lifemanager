import React, { FC } from 'react';
import axios from 'axios';
import Button from '@Atoms/Button';
import { observer } from 'mobx-react';
import { userStore } from '@Stores/user';
import {
  Route,
  Redirect,
} from 'react-router-dom';

const githubLogin = async () => {
  const res = await axios.get(`${process.env.APISERVER_HOST}/api/auth/github`);
  window.location.href = res.data;
};

const sampleLogin = () => {
  userStore.logIn({
    username: 'newUser',
  });
};

const App: FC<any> = ({ from = { pathname: '/', search: '', hash: '' } }) => {
  if (userStore.data.username !== 'noUser') return <Redirect to={from} />;
  return (
    <>
      <h1>여기는 로그인 페이지</h1>
      <Button onClick={githubLogin}> {'GitHubLogin'}</Button>
      <Button onClick={sampleLogin}> {'Sample Login'}</Button>
    </>
  );
};

export default observer(App);
