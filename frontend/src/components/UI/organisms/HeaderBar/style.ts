import styled from 'styled-components';
import Img from 'components/UI/atoms/Img';
import DigitalClockComponent from 'components/UI/atoms/DigitalClock';
import DatePickerComponent from 'components/UI/atoms/DatePicker';

export const HeaderBar = styled.div`
  background-color: ${({ theme }) => theme.color.black};
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

export const DatePicker = styled(DatePickerComponent)`
  background-color: black ;
  color: white ;
  text-align: center;
  color: transparent;
  text-shadow: 0 0 0 white;
  :focus {
    outline: none;
  }
`;

export const DigitalClock = styled(DigitalClockComponent)`
  width: 3.25rem;
  color: white;
  font-size: 0.8rem;
  text-align: left;
`;

export const UserProfile = styled.div`
  margin-right: 0.4rem;
  display: flex;
  align-items: center;
`;

export const UserImg = styled(Img)`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`;

export default {};
