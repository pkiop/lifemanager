import styled from 'styled-components';

export const NavBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.color.navbar};
  z-index: 99;
`;

export const AddBtn = styled.div`
  background-color: ${({ theme }) => theme.color.mainColor};
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.3rem;
  z-index: 101;

  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    color: red;
    cursor: pointer;
  }
`;

export const PlusText = styled.div`
  font-size: 2rem;
  margin-bottom: 0.3rem;
`;
