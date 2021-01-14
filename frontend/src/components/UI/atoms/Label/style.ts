import styled from 'styled-components';

export const Label = styled.button`
  border: none;
  background-color: ${({ color }) => color};
  //TODO 배경색에 따라 흰색 or 검은색으로 글씨 색 수정
  color: white;
  height: ${({ theme }) => theme.size.categoryLabelSize.height};
  width: ${({ theme }) => theme.size.categoryLabelSize.width};
  border-radius: 1.2rem;
`;

export default {};
