import styled from 'styled-components';
import TitleInputComponent from 'components/UI/molecules/TitleInput';
import BottomBtnsComponent from 'components/UI/molecules/BottomBtns';
import TimeInputComponent from 'components/UI/organisms/TimeInput';
import CategorySelectBarComponent from 'components/UI/organisms/CategorySelectBar';

export const RecodeInput = styled.div`
  & > div {
    :not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;

export const TitleInput = styled(TitleInputComponent)``;
export const TimeInput = styled(TimeInputComponent)``;
export const CategorySelectBar = styled(CategorySelectBarComponent)``;
export const BottomBtns = styled(BottomBtnsComponent)``;
