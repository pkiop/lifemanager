import React from 'react';
import * as S from './style';

export interface Props {
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
  className?: string;
}

const App = ({
  startHour, startMin, endHour, endMin, className,
}: Props) => {
  const timeText = `${startHour}:${startMin}~${endHour}:${endMin}`;
  return <S.TimeRangeText className={className} text={timeText} />;
};
export default App;
