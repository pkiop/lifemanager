import React, { useEffect } from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import RecodeList from 'components/UI/organisms/RecodeList';
import Board from 'components/UI/organisms/Board';
import BottomBtns from 'components/UI/molecules/BottomBtns';
import { loadUser } from 'modules/user/index';
import { useDispatch, useSelector } from 'react-redux';
import RecodeInput from 'components/UI/organisms/RecodeInput';

const TestLabelsForOverFlow = [
  {
    color: 'red',
    children: 'red',
  },
  {
    color: 'blue',
    children: 'blue',
  },
  {
    color: 'green',
    children: 'green',
  },
  {
    color: 'gray',
    children: 'gray',
  },
];
const App = () => {
  const user = useSelector<any>((state: any) => state.user.user && state.user.user.title);
  const timeRecodes = useSelector<Array<any>>((state: any) => state.payload);
  const dispatch = useDispatch();
  dispatch(loadUser());
  useEffect(() => {
  }, [user]);
  const contents = (
    <>
      <div>user : {user}</div>
      <Board />
      <RecodeInput labelList={TestLabelsForOverFlow} />
      <RecodeList recodeList={timeRecodes as [] ? [] : []} />
      <BottomBtns
        lgText={'Add Recode'}
        smText={'Finish'}
        lgOnClick={() => alert('add')}
        smOnClick={() => alert('finish')}
      />
    </>
  );

  return <MainTemplate contents={contents} />;
};

export default App;
