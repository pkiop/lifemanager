import styled from 'styled-components';
import TextComponent from 'components/UI/atoms/Text';
import InputComponent from 'components/UI/atoms/Input';

export const TitleInput = styled.div`
  background-color: ${({ theme }) => theme.color.beige};
  border-radius: ${({ theme }) => theme.size.mainInputRadius};
`;

export const Text = styled(TextComponent)`
  padding: 0.5rem 0 0 0.4rem ;
  margin: 0 1rem;
  font-size: 1.2rem;
`;

export const Input = styled(InputComponent)`
  margin: 0.5rem 1rem;
  width: calc(100% - 2rem);
  height: 1.4rem;
  font-size: 1.0rem;
  ::placeholder {
    padding-left: 0.5rem;
    margin-top: 1rem;
  }
`;

export default {};
