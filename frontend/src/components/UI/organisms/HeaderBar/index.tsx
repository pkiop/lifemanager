import React from 'react';
import LogoImg from 'images/LifemanagerMainLogo.png';
import hambug from 'images/hambug.svg';
import * as S from './style';

export interface Props {
  className?: string;
}

function App({ className }: Props) {
  const cognitoLastUser = `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_COGNITO_ISP}.LastAuthUser`;
  const cognitoProvider = `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_COGNITO_ISP}.${localStorage.getItem(cognitoLastUser)}.userData`;
  const userName = JSON.parse(localStorage.getItem(cognitoProvider)!)?.UserAttributes[3].Value;
  return (
    <>
      <S.HeaderBar className={className}>
        <S.Logo src={LogoImg} />
        <S.DigitalClockWrap>
          <S.DigitalClock />
        </S.DigitalClockWrap>
        <div style={{ color: 'white' }}>{userName}</div>
        <S.MenuBtn>
          <S.HambugIcon src={hambug} />
        </S.MenuBtn>
      </S.HeaderBar>
    </>
  );
}

export default App;
