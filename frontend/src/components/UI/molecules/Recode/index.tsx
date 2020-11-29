import React from 'react';
import { makeTwoNumber, nowHourMin, calNowTime } from '@Utils/time';
import * as S from './style';

export interface Props {
  title: string;
  startTime: Array<number>;
  endTime?: Array<number>;
  category: string;
  isActive: boolean;
  className?: string;
}

const App = ({
  title,
  startTime,
  endTime = nowHourMin(),
  category,
  isActive,
  className,
}: Props) => {
  const nowTime = calNowTime(startTime, endTime);
  return (
    <S.Recode className={className}>
      <S.Title text={title} />
      <S.UnderWrap>
        <S.TimeRangeText startTime={startTime} endTime={endTime} />
        <S.MiniText
          text={`${makeTwoNumber(nowTime[0])}:${makeTwoNumber(nowTime[1])}`}
        />
        <S.MiniText text={category} />
        <S.MiniText text={category} />
        <S.MiniText text={isActive ? '활용' : '제외'} />
      </S.UnderWrap>
    </S.Recode>
  );
};

export default App;
