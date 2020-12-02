import Button from '@Components/UI/atoms/Button';
import styled, { css } from 'styled-components';

export const BottomBtns = styled.div``;

const Btn = css`
  height: 100%;
`;

export const LgBtn = styled(Button)`
  ${Btn};
  background-color: red;
  margin-right: 1em;
  width: 70%;
`;
export const SmBtn = styled(Button)`
  ${Btn};
  background-color: green;
  width: 20%;
`;

export default {};
