import React from 'react';
import * as S from './style';

export interface Props {
  className?: string;
}

const App = ({ className }: Props) => (
  <S.RecodeInput className={className}>
    <S.TitleInput text="Title" />
    <S.TimeInput />
    <S.CategorySelectBar />
  </S.RecodeInput>
);

export default App;
