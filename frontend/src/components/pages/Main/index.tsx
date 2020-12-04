import React from 'react';
import { observer } from 'mobx-react-lite';
import MainTemplate from '@Components/templates/MainTemplate';
import RecodeList from '@Organisms/RecodeList';
import Board from '@Organisms/Board';
import BottomBtns from '@Molecules/BottomBtns';

const App = ({ recodeList, className }: any) => {
  const contents = (
    <>
      <Board />
      <RecodeList recodeList={recodeList} />
      <BottomBtns
        lgText={'Add Recode'}
        smText={'Finish'}
        lgOnClick={() => alert('add')}
        smOnClick={() => alert('finish')}
      />
    </>
  );

  return <MainTemplate contents={contents} className={className} />;
};

export default observer(App);
