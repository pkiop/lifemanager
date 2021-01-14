import React from 'react';
import * as S from './style';

export interface Props {
  navPlusOnClick: any;
  className?: string;
}

function App({ navPlusOnClick, className }: Props) {
  return (
    <>
      <S.NavBar className={className}>
        <S.AddBtn onClick={navPlusOnClick}>
          <S.PlusText>+</S.PlusText>
        </S.AddBtn>
      </S.NavBar>
    </>
  );
}

export default App;
