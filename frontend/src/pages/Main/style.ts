import styled from 'styled-components';
import RecodeInputComponent from 'components/UI/organisms/RecodeInput';

export const RecodeInput = styled(RecodeInputComponent)`
  background-color: ${({ theme }) => theme.color.white}; 
  margin: 0 auto;
  padding: 1rem 0;
  border-top-left-radius: ${({ theme }) => theme.size.mainInputRadius};
  border-top-right-radius: ${({ theme }) => theme.size.mainInputRadius};
  position: fixed;
  left: 4.9%;
  right: 4.9%;
  bottom: -16rem;
  transition: 0.4s bottom;
  &.active {
    bottom: calc(${({ theme }) => theme.size.navbarHeight} - 0.05rem);
    transition: 0.4s bottom;
  }
  z-index: 30;
`;

export const RecodeInputCover = styled.div`
  position: fixed;
  left:0;
  top: 0;
  width: 100%;
  height: 100%;
  
  display: none;
  &.active {
    display: flex;
  }
`;

export const UpperWrap = styled.div`
  display:flex;
  justify-content: space-between;
`;
