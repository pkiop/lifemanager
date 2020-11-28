import React, { FC } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react';
import { userStore } from '@Stores/user';
import GitHubLogo from '@Images/GitHub.png';
import { Redirect } from 'react-router-dom';
import * as S from './style';

const githubLogin = async () => {
  const res = await axios.get(`${process.env.APISERVER_HOST}/api/auth/github`);
  window.location.href = res.data;
};

const App = ({
  from = { pathname: '/', search: '', hash: '' },
  className,
}: any) => {
  if (userStore.data.username !== 'noUser') return <Redirect to={from} />;
  return (
    <S.LoginPage>
      <S.HeaderBar className={className} />
      <S.GitHubLogin
        icon={GitHubLogo}
        ButtonTitle={'Login With GitHub'}
        onClick={githubLogin}
      />
    </S.LoginPage>
  );
};

export default observer(App);
