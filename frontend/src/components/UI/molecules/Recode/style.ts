import styled, { css } from 'styled-components';
import Text from 'components/UI/atoms/Text';
import TimeRangeTextComponent from 'components/UI/molecules/TimeRangeText';

export const Recode = styled.div`
  background-color: ${({ theme }) => theme.color.beige};
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 4rem;
  box-sizing: border-box; 
  height: 6rem;
  border-radius: ${({ theme }) => theme.size.mainInputRadius};

  transition: 0.3s box-shadow;
  :hover {
    box-shadow: 0.1rem 0.1rem gray;
    transition: 0.3s box-shadow;
    cursor: pointer;
  }
`;

const textCss = css`
  text-align: center;
`;

const firstText = css`
  margin-left: 1.2rem;
`;

export const Title = styled(Text)`
  ${firstText}
  font-size: 1.4rem;
  width: 100%;
  margin-bottom: 0.4rem;
`;

export const TimeRangeText = styled(TimeRangeTextComponent)`
  ${firstText}
  width: 35%;
`;

export const MiniText = styled(Text)`
  ${textCss}
  width: 15%;
`;

const Wrap = styled.div`
  width: 100%;
  display: flex;
  height: 50%;
  align-items: center;
`;

export const UpperWrap = styled(Wrap)``;

export const UnderWrap = styled(Wrap)`
  display: flex;
  justify-content: space-between;
`;

export default {};
