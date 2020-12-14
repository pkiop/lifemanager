import React from 'react';
import axios from 'axios';
import GitHubLogo from 'images/GitHub.png';
import GitHubLogin from 'components/UI/molecules/OAuthLogin';
import MainTemplate from 'components/templates/MainTemplate';

const githubLogin = async () => {
  const res = await axios.get(`${process.env.REACT_APP_APISERVER_HOST}/api/auth/github`);
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

export default App;
