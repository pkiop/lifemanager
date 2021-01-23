import styled from 'styled-components';

export const Board = styled.div`
  padding: 1.2rem;
  width: 45%;
  height: 10rem;
  background-color: ${({ theme }) => theme.color.beige};
  border-radius: ${({ theme }) => theme.size.mainInputRadius};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  font-size: 1.2rem;
  :not(:last-child) {
    margin-bottom: 0.8rem;
  } 
`;
