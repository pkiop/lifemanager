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

const timeRecodeStartHourSort = (recode1:ITimeRecode, recode2: ITimeRecode) => {
  const startTimeDiff = recode1.startTime.hour - recode2.startTime.hour;
  if (startTimeDiff === 0) {
    return recode1.startTime.min - recode2.startTime.min;
  }
  return startTimeDiff;
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
  const res = timeRecodes.slice().sort(timeRecodeStartHourSort).map((recode: ITimeRecode) => {
    console.log('recode : ', recode);
    return (
      <Recode
        key={recode.title
        + recode.startTime.hour
        + recode.startTime.min
        + recode.endTime.hour
        + recode.endTime.min}
        title={recode.title}
        startTime={recode.startTime}
        endTime={recode.endTime}
        category={recode.category}
        onClick={recodeOnClick(recode.id)}
        isActive={recode.isActive} />
    );
  });
  return (
    <S.RecodeList className={className}>
      {res}
    </S.RecodeList>
  );
}

export default RecodeList;
