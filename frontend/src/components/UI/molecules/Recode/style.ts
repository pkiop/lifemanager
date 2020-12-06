import styled from 'styled-components';
import Text from 'components/UI/atoms/Text';
import TimeRangeTextComponent from 'components/UI/molecules/TimeRangeText';

export const Recode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 4rem;
`;

export const Title = styled(Text)`
  width: 100%;
`;

export const TimeRangeText = styled(TimeRangeTextComponent)`
  width: 65%;
`;

export const MiniText = styled(Text)`
  width: 15%;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  height: 50%;
  align-items: center;
`;

export const UpperWrap = styled(Wrap)``;

export const UnderWrap = styled(Wrap)``;

export default {};
