import React from 'react';
import * as S from './style';

export interface Props {
  className?: string;
}

const App = ({ className }: Props) => {
  console.log('temp');
  return (
    <S.BottomBtns className={className}>
      <S.LgBtn>submit</S.LgBtn>
      <S.SmBtn>delete</S.SmBtn>
    </S.BottomBtns>
  );
};

export default App;
