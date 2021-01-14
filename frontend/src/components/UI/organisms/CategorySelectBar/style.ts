import styled from 'styled-components';
import LabelListComponent from 'components/UI/molecules/LabelList';
import ToggleSwitchComponent from 'components/UI/atoms/ToggleSwitch';

export const CategorySelectBar = styled.div`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.color.beige};
  display: flex;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.size.mainInputRadius};
`;

export const CategoryList = styled(LabelListComponent)`
`;

export const ToggleSwitch = styled(ToggleSwitchComponent)`
`;

export default {};
