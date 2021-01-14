import styled from 'styled-components';
import HeaderBarComponent from 'components/UI/organisms/HeaderBar';
import NavBarComponent from 'components/UI/organisms/NavBar';

export const MainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const headerBarHeight = '2.5rem';
const navBarHeight = '3rem';
export const HeaderBar = styled(HeaderBarComponent)`
  position: fixed;
  top:0;
  left:0;
  height: ${headerBarHeight};
  z-index: 100;
`;

export const NavBar = styled(NavBarComponent)`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  height: ${navBarHeight};
`;

export const Contents = styled.div`
  margin-top: calc(${headerBarHeight} + 1rem);
  margin-bottom: calc(${headerBarHeight} + 1rem);
  width: 90%;
`;
