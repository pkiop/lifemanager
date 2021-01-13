import styled from 'styled-components';
import TextComponent from 'components/UI/atoms/Text';
import InputComponent from 'components/UI/atoms/Input';

export const TimeInput = styled.div`
  background-color: ${({ theme }) => theme.color.beige};
  display: flex;
  justify-content: center;
  border-radius: ${({ theme }) => theme.size.mainInputRadius};
  padding: 0 0.5rem;
  box-sizing: border-box;
`;

export const Text = styled(TextComponent)`
  text-align: center;
`;

export const TimeWrap = styled.div`
  box-sizing: border-box;
  margin: 0.5rem 0.5rem;
  padding: 1rem;
  border-radius: ${({ theme }) => theme.size.mainInputRadius};
  display: flex;
  font-weight: 600;
  flex-direction: column;
  background-color: ${({ theme }) => theme.color.timeInput};
`;

export const Wrap = styled.div`
  display: flex;
  justify-content: space-between;


  :not(:last-child) {
    margin-bottom: 0.4rem;
  }
`;

export const Input = styled(InputComponent)`
  width: 2.5rem;
  font-size: 1rem;
  margin-left: 0.4em;
`;

export default {};
