import styled from 'styled-components';

export const ToggleSwitch = styled.button`
  position: relative;
  width: 1.7rem;
  height: 1rem;
  border-radius: 0.5rem;
  background-color: #5c52ce;

  .circle {
    position: absolute;
    top: 0;
    right: -0.1px;
    background-color: white;
    width: 1rem;
    height: 1rem;
    border-radius: 0.5rem;
    transition: 0.3s;
  }

  .circle.active {
    right: 0.71rem;
  }
`;

export default {};
