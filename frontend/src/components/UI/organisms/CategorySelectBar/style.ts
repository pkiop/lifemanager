import styled from 'styled-components';
import LabelListComponent from '@Molecules/LabelList';
import ToggleSwitchComponent from '@Atoms/ToggleSwitch';

export const CategorySelectBar = styled.div`
  background-color: ${({ theme }) => theme.color.mainColor};
  display: flex;
  width: 100%;
`;

export const CategoryList = styled(LabelListComponent)``;

export const ToggleSwitch = styled(ToggleSwitchComponent)``;

export default {};
