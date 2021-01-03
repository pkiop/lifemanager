import React, { useRef } from 'react';
import { LabelType } from 'components/UI/atoms/Label';
// import { useDispatch, useSelector } from 'react-redux';
import { setTimeRecode, ITimeRecode } from 'modules/timeRecode';

import * as S from './style';

export interface Props {
  labelList: LabelType[];
  className?: string;
}

const App = ({ labelList, className }: Props) => {
  // const timeRecode: ITimeRecode = useSelector((state: any) => state.timeRecode.timeRecodeInput);
  // const dispatch = useDispatch();
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
    const title = titleRef.current && titleRef.current.value;
    const startHour = startHourRef.current && startHourRef.current.value;
    const startMin = startMinRef.current && startMinRef.current.value;
    const startTime = [startHour, startMin];
    const endHour = endHourRef.current && endHourRef.current.value;
    const endMin = endMinRef.current && endMinRef.current.value;
    const endTime = [endHour, endMin];
    // const recode = {
    //   userId: 'pkiop',
    //   title,
    //   startTime,
    //   endTime,
    //   category: 'develop',
    //   isActivate: true,
    // };
    // dispatch(setTimeRecode(recode));
  };

  return (
    <S.RecodeInput className={className}>
      <S.TitleInput titleRef={titleRef} text={'timeRecode.title'} />
      <S.TimeInput
        startHourRef={startHourRef}
        startMinRef={startMinRef}
        endHourRef={endHourRef}
        endMinRef={endMinRef}
        startTime={/* timeRecode.startTime */ [10, 20]}
        endTime={/* timeRecode.endTime */ [20, 30]}/>
      <S.CategorySelectBar labelList={labelList} />
      <S.BottomBtns lgOnClick={onclickHandler}/>
    </S.RecodeInput>
  );
};

export default App;
