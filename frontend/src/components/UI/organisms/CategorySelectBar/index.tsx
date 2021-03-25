import React from 'react';
import { LabelType } from 'components/UI/atoms/Label';
import * as S from './style';

export interface Props {
  labelList: LabelType[];
  selectedCategory?: string;
  setSelectedCategory?: any;
  switchDivRef?: React.RefObject<HTMLDivElement>;
  className?: string;
}

function CategorySelectBar({
  labelList, selectedCategory, setSelectedCategory, switchDivRef, className,
}: Props) {
  return (
    <S.CategorySelectBar className={className}>
      <S.CategoryList
        labelList={labelList}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <S.ToggleSwitch switchDivRef={switchDivRef} />
    </S.CategorySelectBar>
  );
}

export default CategorySelectBar;
