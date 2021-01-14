import React from 'react';
import * as S from './style';

export interface Props {
  text?: string;
  className?: string;
}

function App({ text, className }: Props) {
  return (
    <S.Text className={className}>{text}</S.Text>
  );
}

export default App;
