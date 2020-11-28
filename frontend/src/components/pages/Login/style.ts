import styled from 'styled-components';
import HeaderBarComponent from '@Organisms/HeaderBar';
import OAuthLoginComponent from '@Molecules/OAuthLogin';

export const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderBar = styled(HeaderBarComponent)`
  width: 100%;
  height: 20px;
`;

export const GitHubLogin = styled(OAuthLoginComponent)``;
