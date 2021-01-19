import React, { useReducer } from 'react';
import LogoImg from 'images/LifemanagerMainLogo.png';
import { Auth } from 'aws-amplify';
import { userVar } from 'graphql/localState';
import { useReactiveVar } from '@apollo/client';
import * as S from './style';

export interface Props {
  className?: string;
}

function HeaderBar({ className }: Props) {
  const cognitoLastUser = `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_COGNITO_ISP}.LastAuthUser`;
  const cognitoProvider = `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_COGNITO_ISP}.${localStorage.getItem(cognitoLastUser)}.userData`;
  const userImage = JSON.parse(localStorage.getItem(cognitoProvider)!)?.UserAttributes[5].Value;
  const [userModalVisible, setUserModalVisible] = useReducer((state: boolean) => !state, false);
  const userReactiveVar = useReactiveVar(userVar);

  const dropdownContents = [
    {
      title: '로그아웃',
      onClick: () => Auth.signOut(),
    },
  ];

  return (
    <S.HeaderBar className={className}>
      <S.Logo src={LogoImg} />
      <S.DigitalClockWrap>
        <S.DatePicker userVar={userReactiveVar} setUserVar={userVar} />
      </S.DigitalClockWrap>
      <S.UserProfile>
        <S.UserImg onClick={() => setUserModalVisible()} src={userImage} />
        <S.UserModal
          visible={userModalVisible}
          toggleVisible={setUserModalVisible}
          dropdownList={dropdownContents}/>
      </S.UserProfile>
    </S.HeaderBar>
  );
}

export default HeaderBar;
