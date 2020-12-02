import React from 'react';
import { LabelType } from '@Atoms/Label';
import * as S from './style';

export interface Props {
  labelList: LabelType[];
  className?: string;
}

const App = ({ labelList, className }: Props) => (
  <S.RecodeInput className={className}>
    <S.TitleInput text="Title" />
    <S.TimeInput />
    <S.CategorySelectBar labelList={labelList} />
    <S.BottomBtns />
  </S.RecodeInput>
);

export default App;
