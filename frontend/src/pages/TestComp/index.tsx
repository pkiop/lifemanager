import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneUser } from 'modules/user';

const App = () => {
  const user = useSelector<any>((state: any) => state.user.user && state.user.user.title);
  const dispatch = useDispatch();

  dispatch(getOneUser(1));
  return (
    <>
      <div>temp</div>
      <div>{JSON.stringify(user)}</div>
    </>
  );
};

export default App;
