import React from 'react';
import * as S from './style';

export interface Props {
  lgText?: string;
  smText?: string;
  lgOnClick?: any;
  smOnClick?: any;
  className?: string;
}

function BottomBtn({
  lgText = 'Add Recode',
  smText = 'Finish',
  lgOnClick,
  smOnClick,
  className,
}: Props) {
  return (
    <S.BottomBtns className={className}>
      <S.LgBtn onClick={lgOnClick}>{lgText}</S.LgBtn>
      <S.SmBtn onClick={smOnClick}>{smText}</S.SmBtn>
    </S.BottomBtns>
  );
}

export default BottomBtn;
