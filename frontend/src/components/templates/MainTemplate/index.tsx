import React from 'react';
import * as S from './style';

function App({ contents, navPlusOnClick, className }: any) {
  return (
    <S.MainTemplate className={className}>
      <S.HeaderBar />
      <S.Contents>
        {contents}
      </S.Contents>
      <S.NavBar navPlusOnClick={navPlusOnClick}/>
    </S.MainTemplate>
  );
}

export default App;
