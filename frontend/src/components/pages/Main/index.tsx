import React from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import RecodeList from 'components/UI/organisms/RecodeList';
import Board from 'components/UI/organisms/Board';
import BottomBtns from 'components/UI/molecules/BottomBtns';

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

export default App;
