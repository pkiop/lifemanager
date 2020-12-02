import styled from 'styled-components';
import Img from '@Atoms/Img';
import DigitalClockComponent from '@Atoms/DigitalClock';
import Button from '@Atoms/Button';

export const HeaderBar = styled.div`
  background-color: ${({ theme }) => theme.color.mainColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 2.6rem;
`;

export const Logo = styled(Img)`
  margin-left: 0.4rem;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`;

export const DigitalClockWrap = styled.div`
  padding: 0.3rem;
`;

export const DigitalClock = styled(DigitalClockComponent)`
  width: 3.25rem;
  color: white;
  font-size: 0.8rem;
  text-align: left;
`;

export const MenuBtn = styled(Button)`
  width: 2rem;
  height: 2rem;
  padding: 0;
  background-color: none;
  margin-right: 0.4rem;
`;

export const HambugIcon = styled(Img)`
  width: 100%;
  height: 100%;
`;

export default {};
