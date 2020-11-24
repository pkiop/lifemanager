import React, {
  FC, useEffect, useState, useReducer,
} from 'react';
import { userStore } from '@Stores/user';
import { observer } from 'mobx-react';
import {
  Redirect,
} from 'react-router-dom';
import Axios from 'axios';

const getHandler = async (setReceiveData: React.Dispatch<React.SetStateAction<string>>) => {
  const res = await Axios.get(`${process.env.APISERVER_HOST}/api/timeRecode`);
  console.log('res : ', res.data[0].test);
  setReceiveData(res.data[0].test);
};

const postHandler = async (setReceiveData: React.Dispatch<React.SetStateAction<string>>) => {
  const body = {
    data123: 'data123',
  };
  const res = await Axios.post(`${process.env.APISERVER_HOST}/api/timeRecode`, body);
  setReceiveData(res.data[0].test.data123);
};

const putHandler = async (setReceiveData: React.Dispatch<React.SetStateAction<string>>) => {
  const body = {
    data123: '456',
  };
  const id = 123;
  const res = await Axios.put(`${process.env.APISERVER_HOST}/api/timeRecode/:${id}`, body);
  setReceiveData(res.data[0].test.data123);
};

const deleteHandler = () => {

};

const App: FC = () => {
  const [isClicked, setIsClicked] = useReducer((state) => !state, false);
  const [receiveData, setReceiveData] = useState('');
  useEffect(() => {

  }, [isClicked, receiveData]);
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
      <button onClick={() => getHandler(setReceiveData)}>GET TR</button>
      <button onClick={() => postHandler(setReceiveData)}>POST TR</button>
      <button onClick={() => putHandler(setReceiveData)}>PUT TR</button>
      <button onClick={() => {}}>DELETE TR</button>
      <h2>{receiveData}</h2>
    </>
  );
};
export default observer(App);
