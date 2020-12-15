import React, { useEffect, useRef } from 'react';
import { LabelType } from 'components/UI/atoms/Label';
import { useSelector } from 'react-redux';
import { ITimeRecode } from 'modules/timeRecode';
import * as S from './style';

export interface Props {
  labelList: LabelType[];
  className?: string;
}

const App = ({ labelList, className }: Props) => {
  const timeRecode: ITimeRecode = useSelector((state: any) => state.timeRecode.timeRecodeInput);
  const titleRef = useRef<HTMLInputElement>(null);
  const startHourRef = useRef<HTMLInputElement>(null);
  const startMinRef = useRef<HTMLInputElement>(null);
  const endHourRef = useRef<HTMLInputElement>(null);
  const endMinRef = useRef<HTMLInputElement>(null);

  const onclickHandler = () => {
    console.log(titleRef.current && titleRef.current.value);
    console.log(startHourRef.current && startHourRef.current.value);
    console.log(startMinRef.current && startMinRef.current.value);
    console.log(endHourRef.current && endHourRef.current.value);
    console.log(endMinRef.current && endMinRef.current.value);
  };
  return (
    <S.RecodeInput className={className}>
      <S.TitleInput titleRef={titleRef} text={timeRecode.title} />
      <S.TimeInput
        startHourRef={startHourRef}
        startMinRef={startMinRef}
        endHourRef={endHourRef}
        endMinRef={endMinRef}
        startTime={timeRecode.startTime}
        endTime={timeRecode.endTime}/>
      <S.CategorySelectBar labelList={labelList} />
      <S.BottomBtns lgOnClick={onclickHandler}/>
    </S.RecodeInput>
  );
};

export default App;
