import styled from 'styled-components';
import Button from 'components/UI/atoms/Button';
import Img from 'components/UI/atoms/Img';

export const Icon = styled(Img)`
  margin-left: 0.4rem;
  width: 1.8rem;
  height: 1.8rem;
  background-color: white;
`;

export const LoginButton = styled(Button)`
  border: 1px solid black;
  border-radius: 4px;
  width: 10rem;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;

  justify-content: space-between;
`;

export const TitleWrap = styled.div`
  text-align: center;
  margin-right: 0.4rem;
  height: 1rem;
`;

export default {};
