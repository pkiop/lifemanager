import React, { useEffect, useState } from 'react';
import * as S from './style';

export interface Props {
  lgText?: string;
  smText?: string;
  lgOnClick?: () => void;
  smOnClick?: () => void;
  className?: string;
}

const getNowTimeString = () => {
  const nowDate = new Date();
  const hour = nowDate.getHours();
  const min = nowDate.getMinutes();
  const sec = nowDate.getSeconds();
  let nowTime = '';
  if (hour < 10) {
    nowTime += '0';
  }
  nowTime += `${String(hour)}:`;
  if (min < 10) {
    nowTime += '0';
  }
  nowTime += `${String(min)}:`;
  if (sec < 10) {
    nowTime += '0';
  }
  nowTime += `${String(sec)}`;
  return nowTime;
};

const timeCheck = (setNowTime: React.Dispatch<React.SetStateAction<string>>) => setInterval(() => {
  const nowTime = getNowTimeString();
  setNowTime(nowTime);
}, 1000);

const App = ({ className }: Props) => {
  const [nowTime, setNowTime] = useState(getNowTimeString());
  timeCheck(setNowTime);

  return <S.DigitalClock className={className}>{nowTime}</S.DigitalClock>;
};

export default App;
