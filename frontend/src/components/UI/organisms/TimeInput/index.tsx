/* eslint-disable no-param-reassign */
import React, { useCallback } from 'react';
import * as S from './style';

export interface IRecodeTime {
  hour: number,
  min: number,
}
export interface Props {
  startTime?: IRecodeTime;
  endTime?: IRecodeTime;
  className?: string;
  startHourRef?: any;
  startMinRef?: any;
  endHourRef?: any;
  endMinRef?: any;
}

function TimeInput({
  className, startHourRef, startMinRef, endHourRef, endMinRef, ...props
}: Props) {
  const setEndTimeHandler = useCallback(() => {
    endHourRef.current.value = `${new Date().getHours()}`;
    endMinRef.current.value = `${new Date().getMinutes()}`;
  }, []);
  return (
    <S.TimeInput className={className} {...props}>
      <S.TimeWrap>
        <S.Wrap>
          <S.Text text={'시작시간'} />
          <S.Wrap>
            <S.Input inputRef={startHourRef} />
            <div className="doubledot">:</div>
            <S.Input inputRef={startMinRef} />
          </S.Wrap>
        </S.Wrap>
        <S.Wrap>
          <S.Text text={'종료시간'} />

          <S.Wrap>
            <S.Input inputRef={endHourRef} />
            <div className="doubledot">:</div>
            <S.Input inputRef={endMinRef} />
          </S.Wrap>
        </S.Wrap>
      </S.TimeWrap>
      <button onClick={setEndTimeHandler} >set</button>
    </S.TimeInput>
  );
}

export default TimeInput;
