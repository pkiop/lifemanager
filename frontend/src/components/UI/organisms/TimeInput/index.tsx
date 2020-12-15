import React from 'react';
import { makeTwoNumber } from 'libs/time';
import * as S from './style';

export interface Props {
  startTime?: number[];
  endTime?: number[];
  className?: string;
  startHourRef?: any;
  startMinRef?: any;
  endHourRef?: any;
  endMinRef?: any;
}

const App = ({
  startTime = [0, 0],
  endTime = [0, 0],
  className, startHourRef, startMinRef, endHourRef, endMinRef, ...props
}: Props) => {
  const [startHour, startMin] = startTime;
  const [endHour, endMin] = endTime;
  return (
    <S.TimeInput className={className} {...props}>
      <S.TimeWrap>
        <S.Wrap>
          <S.Text text={'startHour'} />
          <S.Input inputRef={startHourRef} value={makeTwoNumber(startHour)} />
        </S.Wrap>
        <S.Wrap>
          <S.Text text={'startMin'} />
          <S.Input inputRef={startMinRef} value={makeTwoNumber(startMin)} />
        </S.Wrap>
      </S.TimeWrap>
      <S.TimeWrap>
        <S.Wrap>
          <S.Text text={'endHour'} />
          <S.Input inputRef={endHourRef} value={makeTwoNumber(endHour)} />
        </S.Wrap>
        <S.Wrap>
          <S.Text text={'endMin'} />
          <S.Input inputRef={endMinRef} value={makeTwoNumber(endMin)} />
        </S.Wrap>
      </S.TimeWrap>
    </S.TimeInput>
  );
};

export default App;
