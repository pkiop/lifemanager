import React from 'react';
import * as S from './style';

export interface Props {
  text?: string;
  className?: string;
}

const App = ({ text, className }: Props) => (
  <S.Text className={className}>{text}</S.Text>
);

export default App;
