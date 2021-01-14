import styled from 'styled-components';
import HeaderBarComponent from 'components/UI/organisms/HeaderBar';

export const MainTemplate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderBar = styled(HeaderBarComponent)``;

export const Contents = styled.div`
  margin-top: 1rem;
  width: 90%;
`;
