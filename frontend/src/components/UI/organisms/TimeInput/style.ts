import styled from 'styled-components';
import TextComponent from 'components/UI/atoms/Text';
import InputComponent from 'components/UI/atoms/Input';
import ButtonComponent from 'components/UI/atoms/Button';

export const TimeInput = styled.div`
  background-color: ${({ theme }) => theme.color.mainColor};
  display: flex;
  justify-content: center;
  border-radius: ${({ theme }) => theme.size.mainInputRadius};
  padding: 0 0.5rem;
  box-sizing: border-box;
`;

export const Text = styled(TextComponent)`
  text-align: center;
  font-size: 1.1rem;
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
  align-items: center;

  :not(:last-child) {
    margin-bottom: 0.4rem;
  }
  .doubledot{
    text-align: center;
    margin-left: 0.4rem;
  }
`;

export const Button = styled(ButtonComponent)`
  width: 2.0rem;
  height: 1rem;
  font-size: 0.6rem;
  margin-left: 0.4em;
  text-align: center;
  border-radius: ${({ theme }) => theme.size.mainInputRadius};
  margin-left: 1rem;

  &.reset {
    transition: 0.3s background-color;
    background-color: ${({ theme }) => theme.color.delete};
    :hover {
      transition: 0.3s background-color;
      background-color: ${({ theme }) => theme.color.deleteHover};
    }
  }

  &.set {
    transition: 0.3s background-color;
    background-color: ${({ theme }) => theme.color.green};
    :hover {
      transition: 0.3s background-color;
      background-color: ${({ theme }) => theme.color.submitHover};
    }
  }
`;

export const Input = styled(InputComponent)`
  width: 1.6rem;
  font-size: 1rem;
  margin-left: 0.4em;
  text-align: center;
  border-radius: ${({ theme }) => theme.size.mainInputRadius};
`;
