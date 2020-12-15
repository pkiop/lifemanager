import React from 'react';
import * as S from './style';

export interface Props {
  lgText?: string;
  smText?: string;
  lgOnClick?: () => void;
  smOnClick?: () => void;
  className?: string;
}

const App = ({
  lgText = 'Add Recode',
  smText = 'Finish',
  lgOnClick,
  smOnClick,
  className,
}: Props) => {
  console.log('temp');
  return (
    <S.BottomBtns className={className}>
      <S.LgBtn onClick={lgOnClick}>{lgText}</S.LgBtn>
      <S.SmBtn onClick={smOnClick}>{smText}</S.SmBtn>
    </S.BottomBtns>
  );
};

export default App;
