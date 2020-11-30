import React from 'react';
import * as S from './style';

export interface Props {
  text: string;
  value?: string;
  className?: string;
}

const App = ({ text, value, className }: Props) => (
  <S.TitleInput className={className}>
    <S.Text text={text} />
    <S.Input value={value} placeholder={'여기에 입력하세요.'} />
  </S.TitleInput>
);

export default App;
