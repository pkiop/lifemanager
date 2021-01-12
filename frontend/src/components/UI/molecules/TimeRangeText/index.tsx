import React from 'react';
import { makeTwoNumber } from 'libs/time';
import { IHmTime } from 'components/UI/organisms/GetQuery';
import * as S from './style';

export interface Props {
  startTime: IHmTime;
  endTime: IHmTime;
  className?: string;
}

const App = ({ startTime, endTime, className }: Props) => {
  const { hour: startHour, min: startMin } = startTime;
  const { hour: endHour, min: endMin } = endTime;
  const timeText = `${makeTwoNumber(startHour)}:${makeTwoNumber(
    startMin,
  )}~${makeTwoNumber(endHour)}:${makeTwoNumber(endMin)}`;
  return <S.TimeRangeText className={className} text={timeText} />;
};
export default App;
