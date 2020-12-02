import React from 'react';
import LogoImg from '@Images/LifemanagerMainLogo.png';
import hambug from '@Images/hambug.svg';
import * as S from './style';

export interface Props {
  className?: string;
}

const App = ({ className }: Props) => (
  <>
    <S.HeaderBar className={className}>
      <S.Logo src={LogoImg} />
      <S.DigitalClockWrap>
        <S.DigitalClock />
      </S.DigitalClockWrap>
      <S.MenuBtn>
        <S.HambugIcon src={hambug} />
      </S.MenuBtn>
    </S.HeaderBar>
  </>
);

export default App;
