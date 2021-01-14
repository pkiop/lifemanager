import styled from 'styled-components';
import { Recode } from 'components/UI/molecules/Recode/style';

export const RecodeList = styled.div`
  margin-top: 1rem;
  & > ${Recode} {
    :not(:last-child) {
      margin-bottom: 0.4rem;
    }
  }
`;

export default {};
