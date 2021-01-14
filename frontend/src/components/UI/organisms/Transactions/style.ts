import styled from 'styled-components';
import Input from 'components/UI/atoms/Input';
import Select from 'components/UI/atoms/Select';
import Button from 'components/UI/atoms/Button';

export const Transaction = styled.div`
  background-color: gray;
`;

export const Row1 = styled.div`
  background-color: gray;
`;
export const RowElse = styled.div`
  background-color: gray;
`;

export const TitleInput = styled(Input)`
  width: 70%;
`;

export const TimeInput = styled(Input)`
  width: 15%;
`;

export const CategorySelect = styled(Select)`
  width: 20%;
`;

export const SubmitButton = styled(Button)`
  width: 30%;
`;

export default {};
