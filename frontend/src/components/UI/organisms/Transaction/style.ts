import styled from 'styled-components';
import Input from '@Atoms/Input';
import Select from '@Atoms/Select';
import Button from '@Atoms/Button';

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
