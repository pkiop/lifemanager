import React from 'react';
import * as S from './style';

export interface Props {
  className?: string;
}

function App({ className }: Props) {
  return (
    <>
      <S.NavBar className={className}>
        <S.AddBtn>
          <S.PlusText>+</S.PlusText>
        </S.AddBtn>
      </S.NavBar>
    </>
  );
}

export default App;
