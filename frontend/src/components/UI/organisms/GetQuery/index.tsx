import Recode from 'components/UI/molecules/Recode';
import React from 'react';

export interface IHmTime {
  hour: number,
  min: number,
}

export interface ITimeRecode {
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
  className?: string;
}

function App({
  timeRecodes, loading, error, className,
}:Props) {
  if (loading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  const res = timeRecodes.map((recode: ITimeRecode) => (
    <Recode
      title={recode.title}
      startTime={recode.startTime}
      endTime={recode.endTime}
      category={recode.category}
      isActive={recode.isActive} />
  ));
  return (
    <>
      {res}
    </>
  );
}

export default App;
