import React, { FC } from 'react';
import axios from 'axios';
import { observer } from 'mobx-react-lite';
import GitHubLogo from '@Images/GitHub.png';
import GitHubLogin from '@Molecules/OAuthLogin';
import MainTemplate from '@Templates/MainTemplate';

const githubLogin = async () => {
  const res = await axios.get(`${process.env.APISERVER_HOST}/api/auth/github`);
  window.location.href = res.data;
};

const App = ({ className }: any) => {
  const contents = (
    <GitHubLogin
      icon={GitHubLogo}
      ButtonTitle={'Login With GitHub'}
      onClick={githubLogin}
    />
  );
  return <MainTemplate contents={contents} className={className} />;
};

export default observer(App);
