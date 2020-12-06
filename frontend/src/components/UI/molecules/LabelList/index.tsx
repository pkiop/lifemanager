import React from 'react';
import { LabelType } from 'components/UI/atoms/Label';
import * as S from './style';

export interface Props {
  labelList: LabelType[];
  className?: string;
}

const mapFunc = (label: LabelType) => (
  <S.Label key={label.color} color={label.color}>
    {label.children}
  </S.Label>
);

const App = ({ labelList, className }: Props) => {
  const labelComponentList = labelList.map(mapFunc);
  if (labelList.length > 3) {
    return (
      <S.LabelList className={className}>
        {labelComponentList.slice(0, 3)}
        <S.More>더</S.More>
      </S.LabelList>
    );
  }
  return <S.LabelList className={className}>{labelComponentList}</S.LabelList>;
};

export default App;
