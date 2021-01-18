import styled, { css } from 'styled-components';
import DropdownComponent from 'components/UI/molecules/Dropdown';

const modalCss = css`
  display: none;
  &.active {
    display:flex;
  }
`;

export const Modal = styled.div`
  position: fixed;
  
  ${modalCss}
`;

export const Dropdown = styled(DropdownComponent)`
  ${modalCss}
  &.active{
    flex-direction: column;
    z-index: 101;
  }
`;

export const ModalOutside = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;

  ${modalCss}
`;
