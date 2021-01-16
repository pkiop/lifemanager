import React from 'react';
import { makeTwoNumber, nowHourMin, calNowTime } from 'libs/time';
import { IHmTime } from 'components/UI/organisms/RecodeList';
import * as S from './style';

export interface IRecode {
  id? : string;
  title: string;
  startTime: IHmTime;
  endTime?: IHmTime;
  category: string;
  isActive: boolean;
  className?: string;
}

function App({
  id,
  title,
  startTime,
  endTime = nowHourMin(),
  category,
  isActive,
  className,
}: IRecode) {
  const nowTime = calNowTime(startTime, endTime);
  return (
    <S.Recode className={className}>
      <S.UpperWrap>
        <S.Title text={title} />
      </S.UpperWrap>
      <S.UnderWrap>
        <S.TimeRangeText startTime={startTime} endTime={endTime} />
        <S.MiniText
          text={`${makeTwoNumber(nowTime.hour)}:${makeTwoNumber(nowTime.min)}`}
        />
        <S.MiniText text={category} />
        <S.MiniText text={isActive ? '활용' : '제외'} />
      </S.UnderWrap>
    </S.Recode>
  );
}

export default App;
