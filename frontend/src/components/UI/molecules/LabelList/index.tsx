import React, { useState } from 'react';
import { LabelType } from 'components/UI/atoms/Label';
import * as S from './style';

export interface Props {
  selectedCategory?: string;
  labelList: LabelType[];
  setSelectedCategory ?: any;
  className?: string;
}

const mapFunc = (selectedCategory:string,
  setSelectedCategory: any, bMoreLabelVisible: boolean) => (label: LabelType, idx: number) => {
  const categoryClassName = selectedCategory === label.labelName ? 'active' : '';
  const overflowClassName = idx > 2 ? 'overflow' : '';
  const visibleClassName = idx > 2 && bMoreLabelVisible ? 'visible' : '';
  const classNameInput = `${categoryClassName} ${overflowClassName} ${visibleClassName}`;
  return (<S.Label
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
    className={classNameInput}
    idx={(idx - 2) * 2}
  />);
};

function LabelList({
  labelList, selectedCategory, setSelectedCategory, className,
}: Props) {
  const [bMoreLabelVisible, setBMoreLabelVisible] = useState<boolean>(false);
  const labelComponentList = labelList.map(mapFunc(selectedCategory || '', setSelectedCategory, bMoreLabelVisible));
  const moreOnClick = () => {
    setBMoreLabelVisible((state:boolean) => !state);
  };

  if (labelList.length > 3) {
    return (
      <S.LabelList className={className}>
        {labelComponentList.slice(0, 3)}
        <S.More onClick={moreOnClick} labelName={bMoreLabelVisible ? 'X' : '...'} />
        {labelComponentList.slice(3)}
      </S.LabelList>
    );
  }
  return <S.LabelList className={className}>{labelComponentList}</S.LabelList>;
}

export default LabelList;
