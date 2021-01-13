import styled from 'styled-components';

export const ToggleSwitch = styled.button`
  position: relative;
  height: ${({ theme }) => theme.size.categoryLabelSize.height};
  width: calc(${({ theme }) => theme.size.categoryLabelSize.height} + 1rem);
  border-radius: calc(${({ theme }) => theme.size.categoryLabelSize.height} / 2);
  background-color: #5c52ce;

  .circle {
    position: absolute;
    top: 0;
    right: -0.1px;
    background-color: white;
    height: ${({ theme }) => theme.size.categoryLabelSize.height};
    width: ${({ theme }) => theme.size.categoryLabelSize.height};;
    border-radius: calc(${({ theme }) => theme.size.categoryLabelSize.height} / 2);
    transition: 0.3s;
  }

  .circle.active {
    right: 1rem;
  }
`;

export default {};
