import React from 'react';
import { LabelType } from '@Atoms/Label';
import * as S from './style';

export interface Props {
  labelList: LabelType[];
  className?: string;
}

const App = ({ labelList, className }: Props) => (
  <S.CategorySelectBar className={className}>
    <S.CategoryList labelList={labelList} />
    <S.ToggleSwitch />
  </S.CategorySelectBar>
);

export default App;
