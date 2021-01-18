import styled from 'styled-components';

export const Dropdown = styled.div`
  border: 1px solid ${({ theme }) => theme.color.black};
  box-shadow: 0.1rem 0.1rem gray;
`;

export const Contents = styled.div`
  font-size: 1.2rem;
  width: 6rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  justify-content: center;
  align-items: center;
`;
