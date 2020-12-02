import styled from 'styled-components';
import Input from '@Atoms/Input';
import Select from '@Atoms/Select';
import Button from '@Atoms/Button';
import Img from '@Atoms/Img';

export const Icon = styled(Img)`
  margin-left: 0.4rem;
  width: 1.8rem;
  height: 1.8rem;
  background-color: black;
`;

export const LoginButton = styled(Button)`
  width: 10rem;
  height: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleWrap = styled.div`
  margin-right: 0.4rem;
`;

export default {};
