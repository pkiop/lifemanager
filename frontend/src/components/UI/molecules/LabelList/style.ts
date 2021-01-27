import styled from 'styled-components';
import LabelComponent from 'components/UI/atoms/Label';

export const LabelList = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;

export const Label = styled(LabelComponent)`
  margin-right: 0.5rem;
  :hover {
    cursor: pointer;
    border: 1px solid yellow;
  }
  &.active {
    color: yellow;
    border: 2px solid yellow;
  }
  &.overflow {
    display: none;
    &.overflow.visible {
      position: absolute;
      top: -${({ idx }: any) => idx}rem;
      left: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const More = styled(LabelComponent)`
  margin-right: 0.5rem;
  width: 2rem;
  background-color: white;
  color: black;
  :hover {
    cursor: pointer;
    border: 1px solid yellow;
  }
`;

export default {};
