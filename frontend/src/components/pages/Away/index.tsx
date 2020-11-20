import React, { FC, useEffect, useReducer } from 'react';
import { userStore } from '@Stores/user';
import { observer } from 'mobx-react';
import {
  Redirect,
} from 'react-router-dom';

const App: FC = () => {
  const [isClicked, setIsClicked] = useReducer((state) => !state, false);
  console.log('dcdc ', document.cookie);
  useEffect(() => {

  }, [isClicked]);
  if (isClicked === true) {
    return <Redirect
      to={{
        pathname: '/',
      }}
    />;
  }
  return (
    <>
      <h1>여기는 away</h1>
      <h2>{userStore.data.username}</h2>
      <button onClick={() => setIsClicked()} >Home으로</button>
    </>
  );
};
export default observer(App);
