import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import Board from 'components/UI/organisms/Board';
import RecodeInput from 'components/UI/organisms/RecodeInput';
import GetQuery from 'components/UI/organisms/GetQuery';
import { gql, useQuery } from '@apollo/client';
import { listTimeRecodes } from 'graphql/queries';

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
  const { loading, error, data } = useQuery(gql`${listTimeRecodes}`);
  const contents = (
    <>
      <Board />
      <RecodeInput labelList={TestLabelsForOverFlow} />
      <GetQuery timeRecodes={data?.listTimeRecodes?.items} loading={loading} error={error} />
    </>
  );

  return <MainTemplate contents={contents} />;
};

export default App;
