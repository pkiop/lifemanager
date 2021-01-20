import React from 'react';
import { LabelType } from 'components/UI/atoms/Label';
import * as S from './style';

export interface Props {
  labelList: LabelType[];
  className?: string;
}

function CategorySelectBar({ labelList, className }: Props) {
  return (
    <S.CategorySelectBar className={className}>
      <S.CategoryList labelList={labelList} />
      <S.ToggleSwitch />
    </S.CategorySelectBar>
  );
}

export default CategorySelectBar;
