import styled from 'styled-components';
import TitleInputComponent from '@Molecules/TitleInput';
import TimeInputComponent from '@Organisms/TimeInput';
import CategorySelectBarComponent from '@Organisms/CategorySelectBar';

export const RecodeInput = styled.div`
  background-color: ${({ theme }) => theme.color.mainColor};
`;

export const TitleInput = styled(TitleInputComponent)``;
export const TimeInput = styled(TimeInputComponent)``;
export const CategorySelectBar = styled(CategorySelectBarComponent)``;

export default {};
