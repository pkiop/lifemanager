import styled from 'styled-components';
import ImgComponent from 'components/UI/atoms/Img';

export const LoginPage = styled.div`
  background-color: gray;
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
  border-radius: 50%;
`;

export default {};
