import React from 'react';
import { IRecode } from 'components/UI/molecules/Recode';
import { calNowTime } from 'libs/time';
import * as S from './style';

export interface Props {
  goalTime: number;
  recodeList?: IRecode[];
  className?: string;
}

function Board({ goalTime, recodeList, className }: Props) {
  const nowTime = recodeList?.reduce((acc: number, recode: IRecode) => {
    const endTime = recode.endTime ? recode.endTime : { hour: 0, min: 0 };
    const calValue = calNowTime(recode.startTime, endTime);
    return acc + calValue.hour + calValue.min / 60;
  }, 0).toFixed(1);
  return (
    <S.Board className={className}>
      <S.Content>게시판</S.Content>
      <S.Content>목표 : {goalTime}시간</S.Content>
      <S.Content>{nowTime} / {goalTime}시간</S.Content>
      <S.Content>{(goalTime - Number(nowTime)).toFixed(1)}시간 남음</S.Content>
    </S.Board>
  );
}

export default Board;
