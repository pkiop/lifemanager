import React from 'react';
import { makeTwoNumber } from '@Utils/time';
import * as S from './style';

export interface Props {
  title: string;
  startTime: Array<number>;
  endTime?: Array<number>;
  category: string;
  isActive: boolean;
  className?: string;
}

const nowHourMin = () => {
  const nowTime = new Date();
  return [nowTime.getHours(), nowTime.getMinutes()];
};

const calNowTime = (startTime: number[], endTime: number[]) => {
  const [startHour, startMin] = startTime;
  const [endHour, endMin] = endTime;

  if (endHour < startHour) {
    if (startMin > endMin) {
      return [endHour + 23 - startHour, startMin - endMin];
    }
    return [endHour + 24 - startHour, endMin - startMin];
  }
  if (startMin > endMin) {
    if (endHour === startHour) {
      return [endHour + 23 - startHour, startMin - endMin];
    }
    return [endHour - 1 - startHour, startMin - endMin];
  }
  return [endHour - startHour, endMin - startMin];
};

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
