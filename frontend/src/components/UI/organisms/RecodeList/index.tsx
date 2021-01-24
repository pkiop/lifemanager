import Recode from 'components/UI/molecules/Recode';
import React from 'react';
import Loading from 'components/UI/atoms/Loading';
import * as S from './style';

export interface IHmTime {
  hour: number,
  min: number,
}

export interface ITimeRecode {
  id: string,
  title: string,
  startTime: IHmTime,
  endTime: IHmTime,
  category: string,
  isActive: boolean,
}

interface Props {
  timeRecodes: ITimeRecode[];
  loading: boolean;
  error: any;
  setUpdateRecodeId?: any;
  toggleRecodeInput?: any;
  className?: string;
}

const getBiasHour = (recode: ITimeRecode, bias: number = 4) => {
  const biasHour = recode.startTime.hour - bias;
  if (biasHour < 0) {
    return biasHour + 24;
  }
  return biasHour;
};

const sortByStartTime = (recode1:ITimeRecode, recode2: ITimeRecode) => {
  const startTimeDiff = getBiasHour(recode1) - getBiasHour(recode2);
  if (startTimeDiff === 0) {
    return (recode1.startTime.min - recode2.startTime.min);
  }
  return startTimeDiff;
};

const sortSleepLocateTail = (recode1: ITimeRecode, recode2: ITimeRecode) => {
  if (recode1.category === '잠' && recode2.category !== '잠') {
    return 1;
  }
  if (recode2.category === '잠' && recode1.category !== '잠') {
    return -1;
  }
  return 0;
};

function RecodeList({
  timeRecodes, loading, error, setUpdateRecodeId, toggleRecodeInput, className,
}:Props) {
  const recodeOnClick = (recodeId: string) => () => {
    setUpdateRecodeId(recodeId);
    toggleRecodeInput();
  };

  if (loading) {
    return (
      <Loading />
    );
  }
  if (error) {
    return <div>error</div>;
  }

  if (timeRecodes === null) return (<></>);
  const res = timeRecodes
    .slice()
    .sort(sortByStartTime)
    .sort(sortSleepLocateTail)
    .map((recode: ITimeRecode) => (
      <Recode
        key={recode.title
        + recode.startTime.hour
        + recode.startTime.min
        + recode.endTime.hour
        + recode.endTime.min}
        title={recode.title}
        startTime={recode.startTime}
        endTime={recode.endTime.hour ? recode.endTime : undefined}
        category={recode.category}
        onClick={recodeOnClick(recode.id)}
        isActive={recode.isActive} />
    ));
  return (
    <S.RecodeList className={className}>
      {res}
    </S.RecodeList>
  );
}

export default RecodeList;
