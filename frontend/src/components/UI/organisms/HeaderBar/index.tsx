import React from 'react';
import LogoImg from 'images/LifemanagerMainLogo.png';
import hambug from 'images/hambug.svg';
import { loginUserName } from 'graphql/localState';
import * as S from './style';

export interface Props {
  className?: string;
}

function App({ className }: Props) {
  return (
    <>
      <S.HeaderBar className={className}>
        <S.Logo src={LogoImg} />
        <S.DigitalClockWrap>
          <S.DigitalClock />
        </S.DigitalClockWrap>
        <div style={{ color: 'white' }}>{localStorage.getItem('loginUserName')}</div>
        <S.MenuBtn>
          <S.HambugIcon src={hambug} />
        </S.MenuBtn>
      </S.HeaderBar>
    </>
  );
}

export default App;
