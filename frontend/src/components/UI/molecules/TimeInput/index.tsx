import React from 'react';
import { makeTwoNumber } from '@Utils/time';
import * as S from './style';

export interface Props {
  startTime: number[];
  endTime: number[];
  className?: string;
}

const App = ({ startTime, endTime, className }: Props) => {
  const [startHour, startMin] = startTime;
  const [endHour, endMin] = endTime;
  return (
    <S.TimeInput className={className}>
      <S.TimeWrap>
        <S.Wrap>
          <S.Text text={'startHour'} />
          <S.Input value={makeTwoNumber(startHour)} />
        </S.Wrap>
        <S.Wrap>
          <S.Text text={'startMin'} />
          <S.Input value={makeTwoNumber(startMin)} />
        </S.Wrap>
      </S.TimeWrap>
      <S.TimeWrap>
        <S.Wrap>
          <S.Text text={'endHour'} />
          <S.Input value={makeTwoNumber(endHour)} />
        </S.Wrap>
        <S.Wrap>
          <S.Text text={'endMin'} />
          <S.Input value={makeTwoNumber(endMin)} />
        </S.Wrap>
      </S.TimeWrap>
    </S.TimeInput>
  );
};

export default App;
