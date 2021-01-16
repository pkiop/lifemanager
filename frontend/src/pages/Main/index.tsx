/* eslint-disable max-len */
import React, { useCallback, useState, useReducer } from 'react';
import MainTemplate from 'components/templates/MainTemplate';
// import { IRecode } from 'components/UI/molecules/Recode';
import RecodeList from 'components/UI/organisms/RecodeList';
import { gql, useQuery } from '@apollo/client';
import { listTimeRecodes } from 'graphql/queries';
import * as S from './style';

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

function App() {
  const {
    loading, error, data, refetch,
  } = useQuery(gql`${listTimeRecodes}`);
  const [bRecodeInput, toggleBRecodeInput] = useReducer((state: boolean) => !state, false);
  // const [clickedRecode, setClickedRecode] = useState<IRecode>();
  const navPlusOnClick = useCallback(() => toggleBRecodeInput(), []);

  const contents = (
    <>
      <S.RecodeInput labelList={TestLabelsForOverFlow} refetch={refetch} className={bRecodeInput ? 'active' : ''}/>
      <RecodeList timeRecodes={data?.listTimeRecodes?.items} loading={loading} error={error} />
      <S.RecodeInputCover onClick={navPlusOnClick} className={bRecodeInput ? 'active' : ''} />
    </>
  );

  return <MainTemplate contents={contents} navPlusOnClick={navPlusOnClick}/>;
}

export default App;
