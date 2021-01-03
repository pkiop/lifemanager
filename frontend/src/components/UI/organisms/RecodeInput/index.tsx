import React, { useRef, useState } from 'react';
import { LabelType } from 'components/UI/atoms/Label';
// import { useDispatch, useSelector } from 'react-redux';
import { setTimeRecode, ITimeRecode } from 'modules/timeRecode';
import { IRecodeTime } from 'components/UI/organisms/TimeInput';
import { gql, useQuery, useMutation } from '@apollo/client';
import { addTimeRecode } from 'graphql/mutations';
import * as S from './style';

export interface Props {
  labelList: LabelType[];
  className?: string;
}

const App = ({ labelList, className }: Props) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const startHourRef = useRef<HTMLInputElement>(null);
  const startMinRef = useRef<HTMLInputElement>(null);
  const endHourRef = useRef<HTMLInputElement>(null);
  const endMinRef = useRef<HTMLInputElement>(null);
  const [addTimeRecodeMutation, { data }] = useMutation(gql`${addTimeRecode}`);
  console.log('mutation result : ', data);
  const onclickHandler = () => {
    const title = titleRef.current && titleRef.current.value;
    const startHour = startHourRef.current && startHourRef.current.value;
    const startMin = startMinRef.current && startMinRef.current.value;
    const startTime = {
      hour: Number(startHour),
      min: Number(startMin),
    };
    const endHour = endHourRef.current && endHourRef.current.value;
    const endMin = endMinRef.current && endMinRef.current.value;
    const endTime = {
      hour: Number(endHour),
      min: Number(endMin),
    };
    addTimeRecodeMutation({
      variables: {
        userId: 'pkiop',
        title,
        startTime,
        endTime,
        category: 'develop',
        isActive: true,
      },
    });
  };

  return (
    <S.RecodeInput className={className}>
      <S.TitleInput titleRef={titleRef} text={'timeRecode.title'} />
      <S.TimeInput
        startHourRef={startHourRef}
        startMinRef={startMinRef}
        endHourRef={endHourRef}
        endMinRef={endMinRef}
      />
      <S.CategorySelectBar labelList={labelList} />
      <S.BottomBtns lgOnClick={onclickHandler}/>
    </S.RecodeInput>
  );
};

export default App;
