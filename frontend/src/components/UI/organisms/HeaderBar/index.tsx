import React from 'react';
import LogoImg from 'images/LifemanagerMainLogo.png';
import * as S from './style';

export interface Props {
  className?: string;
}

function App({ className }: Props) {
  const cognitoLastUser = `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_COGNITO_ISP}.LastAuthUser`;
  const cognitoProvider = `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_COGNITO_ISP}.${localStorage.getItem(cognitoLastUser)}.userData`;
  const userImage = JSON.parse(localStorage.getItem(cognitoProvider)!)?.UserAttributes[5].Value;
  return (
    <>
      <S.HeaderBar className={className}>
        <S.Logo src={LogoImg} />
        <S.DigitalClockWrap>
          <S.DigitalClock />
        </S.DigitalClockWrap>
        <S.UserProfile>
          <S.UserImg src={userImage} />
        </S.UserProfile>
      </S.HeaderBar>
    </>
  );
}

export default App;
