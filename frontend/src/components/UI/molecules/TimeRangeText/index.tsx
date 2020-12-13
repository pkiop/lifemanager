import React from 'react';
import { makeTwoNumber } from 'libs/time';
import * as S from './style';

export interface Props {
  startTime: Array<number>;
  endTime: Array<number>;
  className?: string;
}

const App = ({ startTime, endTime, className }: Props) => {
  const [startHour, startMin] = startTime;
  const [endHour, endMin] = endTime;
  const timeText = `${makeTwoNumber(startHour)}:${makeTwoNumber(
    startMin,
  )}~${makeTwoNumber(endHour)}:${makeTwoNumber(endMin)}`;
  return <S.TimeRangeText className={className} text={timeText} />;
};
export default App;
