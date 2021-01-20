import React from 'react';
import { LabelType } from 'components/UI/atoms/Label';
import * as S from './style';

export interface Props {
  labelList: LabelType[];
  switchDivRef?: React.RefObject<HTMLDivElement>;
  className?: string;
}

function CategorySelectBar({ labelList, switchDivRef, className }: Props) {
  return (
    <S.CategorySelectBar className={className}>
      <S.CategoryList labelList={labelList} />
      <S.ToggleSwitch switchDivRef={switchDivRef}/>
    </S.CategorySelectBar>
  );
}

export default CategorySelectBar;
