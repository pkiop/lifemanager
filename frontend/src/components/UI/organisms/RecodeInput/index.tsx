import React, { useRef } from 'react';
import { LabelType } from 'components/UI/atoms/Label';
import { gql, useMutation } from '@apollo/client';
import { createTimeRecode } from 'graphql/mutations';
import * as S from './style';

export interface Props {
  labelList: LabelType[];
  refetch?: any;
  className?: string;
}

function App({ labelList, refetch, className }: Props) {
  const titleRef = useRef<HTMLInputElement>(null);
  const startHourRef = useRef<HTMLInputElement>(null);
  const startMinRef = useRef<HTMLInputElement>(null);
  const endHourRef = useRef<HTMLInputElement>(null);
  const endMinRef = useRef<HTMLInputElement>(null);

  const cognitoLastUser = `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_COGNITO_ISP}.LastAuthUser`;
  const cognitoProvider = `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_COGNITO_ISP}.${localStorage.getItem(cognitoLastUser)}.userData`;
  const userName = JSON.parse(localStorage.getItem(cognitoProvider)!)?.UserAttributes[3].Value;

  const [addTimeRecodeMutation, { data }] = useMutation(gql`${createTimeRecode}`);
  const onclickHandler = async () => {
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

    const category = 'develop';
    const isActive = true;
    await addTimeRecodeMutation({
      variables: {
        input: {
          userId: userName,
          title,
          startTime,
          endTime,
          category,
          isActive,
        },
      },
    });
    refetch();
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
}

export default App;
