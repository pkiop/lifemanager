import styled from 'styled-components';
import ImgComponent from 'components/UI/atoms/Img';
import OAuthLoginComponent from 'components/UI/molecules/OAuthLogin';

export const LoginPage = styled.div`
  background-color: ${({ theme }) => theme.color.beige};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Img = styled(ImgComponent)`
  width: 160px;
  height: 160px;
  margin: 0 0 4rem;
  border: 2px solid ${({ theme }) => theme.color.black};
  border-radius: 50%;
`;

export const GoogleLogin = styled(OAuthLoginComponent)`
  border: 2px solid ${({ theme }) => theme.color.black};
`;
