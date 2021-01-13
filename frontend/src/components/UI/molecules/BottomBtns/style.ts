import Button from 'components/UI/atoms/Button';
import styled, { css } from 'styled-components';

export const BottomBtns = styled.div`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.color.beige};
  border-radius: ${({ theme }) => theme.size.mainInputRadius};
`;

const Btn = css`
  color: white;
  height: 1.4rem;
  border-radius: ${({ theme }) => theme.size.mainInputRadius};
`;

export const LgBtn = styled(Button)`
  ${Btn};
  background-color: ${({ theme }) => theme.color.submitGreen};
  transition: 0.3s;

  margin-right: 1em;
  width: 70%;
  :hover {
    background-color: ${({ theme }) => theme.color.submitGreenHover};
    transition: 0.3s;
  }
`;
export const SmBtn = styled(Button)`
  ${Btn};
  background-color: ${({ theme }) => theme.color.deleteRed};
  transition: 0.3s;
  width: 25%;

  :hover {
    background-color: ${({ theme }) => theme.color.deleteRedHover};
    transition: 0.3s;
  }

`;

export default {};
