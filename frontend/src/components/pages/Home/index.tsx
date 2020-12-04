import React, { FC, useEffect, useReducer } from 'react';
import { userStore } from '@Stores/user';
import { observer } from 'mobx-react-lite';
import { Redirect } from 'react-router-dom';

const App: FC = () => {
  const [isClicked, setIsClicked] = useReducer((state) => !state, false);
  useEffect(() => {}, [isClicked]);
  if (isClicked === true) {
    return (
      <Redirect
        to={{
          pathname: '/away',
        }}
      />
    );
  }
  return (
    <>
      <h1>여기는 Home</h1>
      <h2>{userStore.data.username}</h2>
      <button
        onClick={() => {
          console.log('onClick');
          userStore.logIn({ username: `${userStore.data.username}1` });
        }}
      >
        클릭
      </button>
      <button onClick={() => setIsClicked()}>Away으로</button>
    </>
  );
};
export default observer(App);
