import React from 'react';
import * as S from './style';

function App({ contents, className }: any) {
  return (
    <S.MainTemplate className={className}>
      <S.HeaderBar />
      <S.Contents>
        {contents}
      </S.Contents>
    </S.MainTemplate>
  );
}

export default App;
