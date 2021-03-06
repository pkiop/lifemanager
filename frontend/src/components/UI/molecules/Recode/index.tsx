import React from 'react';
import { makeTwoNumber, nowHourMin, calNowTime } from 'libs/time';
import { IHmTime } from 'components/UI/organisms/RecodeList';
import * as S from './style';

export interface IRecode {
  id? : string;
  userId?: string;
  title: string;
  startTime: IHmTime;
  endTime?: IHmTime;
  category: string;
  isActive: boolean;
}

export interface Props extends IRecode {
  onClick?: any;
  className?: string;
}

const getNowTime = (startTime: IHmTime, endTime: IHmTime) => {
  const calTime = calNowTime(startTime, endTime);
  if (calTime.hour === 99) {
    const nowTime = {
      hour: new Date().getHours(),
      min: new Date().getMinutes(),
    };
    return calNowTime(startTime, nowTime);
  }
  return calTime;
};

function Recode({
  title,
  startTime,
  endTime = nowHourMin(),
  category,
  isActive,
  onClick,
  className,
}: Props) {
  const nowTime = getNowTime(startTime, endTime);
  const isProgressing = endTime.hour === nowHourMin().hour && endTime.min === nowHourMin().min;

  return (
    <S.Recode onClick={onClick} className={`${className} ${isProgressing ? 'progress' : ''}`} >
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

export default Recode;
