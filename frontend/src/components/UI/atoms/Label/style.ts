import styled from 'styled-components';

export const Label = styled.button`
  background-color: ${({ color }) => color};
  //TODO 배경색에 따라 흰색 or 검은색으로 글씨 색 수정
  color: white;
  height: 1.2rem;
  border-radius: 1.2rem;
`;

export default {};
