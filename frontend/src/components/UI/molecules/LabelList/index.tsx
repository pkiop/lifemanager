import React from 'react';
import { LabelType } from 'components/UI/atoms/Label';
import * as S from './style';

export interface Props {
  selectedCategory?: string;
  labelList: LabelType[];
  setSelectedCategory ?: any;
  className?: string;
}

const mapFunc = (selectedCategory:string, setSelectedCategory: any) => (label: LabelType) => (
  <S.Label
    key={label.color + label.labelName}
    color={label.color}
    onClick={(e: any) => {
      [...e.target.parentNode.childNodes].forEach((el: any) => {
        el.classList.remove('active');
      });
      e.target.classList.add('active');
      setSelectedCategory(label.labelName);
    }}
    labelName={label.labelName}
    className={selectedCategory === label.labelName ? 'active' : ''}
  />
);

function LabelList({
  labelList, selectedCategory, setSelectedCategory, className,
}: Props) {
  const labelComponentList = labelList.map(mapFunc(selectedCategory || '', setSelectedCategory));
  if (labelList.length > 3) {
    return (
      <S.LabelList className={className}>
        {labelComponentList.slice(0, 3)}
        <S.More labelName='...' />
      </S.LabelList>
    );
  }
  return <S.LabelList className={className}>{labelComponentList}</S.LabelList>;
}

export default LabelList;
