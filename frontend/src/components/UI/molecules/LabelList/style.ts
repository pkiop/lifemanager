import styled from 'styled-components';
import LabelComponent from 'components/UI/atoms/Label';

export const LabelList = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled(LabelComponent)`
  :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

export const More = styled(LabelComponent)`
  width: 2rem;
  background-color: white;
  color: black;
`;

export default {};
