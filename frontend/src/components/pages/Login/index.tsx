import React, { FC } from 'react';
import axios from 'axios';
import Button from '@Atoms/Button';

const onClick = async () => {
  const res = await axios.get(`${process.env.APISERVER_HOST}/api/auth/github`);
  window.location.href = res.data;
};

const App: FC = () => (
  <>
    <h1>여기는 로그인 페이지 organism</h1>
    <Button onClick={onClick} title={'GitHubLogin'}/>
  </>
);

export default App;
