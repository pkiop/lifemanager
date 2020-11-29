import React from 'react';
import { RecodeType } from '@Molecules/Recode';
import * as S from './style';

export interface Props {
  recodeList: RecodeType[];
  className?: string;
}

const App = ({ recodeList, className }: Props) => {
  const RecodeComponentList = recodeList.map((recode, index) => (
    <S.Recode
      key={`${index}${recode.title}`}
      title={recode.title}
      startTime={recode.startTime}
      endTime={recode.endTime}
      category={recode.category}
      isActive={recode.isActive}
    />
  ));
  return (
    <S.RecodeList className={className}>{RecodeComponentList}</S.RecodeList>
  );
};

export default App;
