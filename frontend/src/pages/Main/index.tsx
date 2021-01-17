import React, { useCallback, useState, useReducer } from 'react';
import MainTemplate from 'components/templates/MainTemplate';
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
  const [clickedRecodeId, setClickedRecodeId] = useState<string>('');
  const [bRecodeInput, toggleBRecodeInput] = useReducer((state: boolean) => !state, false);
  const toggleRecodeInput = useCallback(() => toggleBRecodeInput(), []);

  const {
    loading, error, data, refetch,
  } = useQuery(gql`${listTimeRecodes}`);

  const contents = (
    <>
      <RecodeList
        setUpdateRecodeId={setClickedRecodeId}
        timeRecodes={data?.listTimeRecodes?.items}
        toggleRecodeInput={toggleRecodeInput}
        loading={loading}
        error={error} />
      <S.RecodeInput recodeId={clickedRecodeId} labelList={TestLabelsForOverFlow} refetch={refetch} className={bRecodeInput ? 'active' : ''}/>
      <S.RecodeInputCover onClick={toggleRecodeInput} className={bRecodeInput ? 'active' : ''} />
    </>
  );

  return <MainTemplate contents={contents} navPlusOnClick={toggleRecodeInput}/>;
}

export default App;
