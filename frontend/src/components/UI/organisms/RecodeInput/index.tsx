import React, { useRef } from 'react';
import { LabelType } from 'components/UI/atoms/Label';
import { gql, useMutation, useQuery } from '@apollo/client';
import { createTimeRecode, updateTimeRecode } from 'graphql/mutations';
import { getTimeRecode } from 'graphql/queries';
import { IRecode } from 'components/UI/molecules/Recode';
import * as S from './style';

export interface Props {
  labelList: LabelType[];
  refetch?: any;
  recodeId?: string;
  className?: string;
}

function App({
  labelList, refetch, recodeId, className,
}: Props) {
  const titleRef = useRef<HTMLInputElement>(null);
  const startHourRef = useRef<HTMLInputElement>(null);
  const startMinRef = useRef<HTMLInputElement>(null);
  const endHourRef = useRef<HTMLInputElement>(null);
  const endMinRef = useRef<HTMLInputElement>(null);
  const {
    loading, error, data: onedata,
  } = useQuery(gql`${getTimeRecode}`, {
    variables: { id: recodeId },
  });

  const cognitoLastUser = `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_COGNITO_ISP}.LastAuthUser`;
  const cognitoProvider = `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_COGNITO_ISP}.${localStorage.getItem(cognitoLastUser)}.userData`;
  const userName = JSON.parse(localStorage.getItem(cognitoProvider)!)?.UserAttributes[3].Value;

  const [addTimeRecodeMutation] = useMutation(gql`${createTimeRecode}`);
  const [updateTimeRecodeMutation] = useMutation(gql`${updateTimeRecode}`);
  const onclickHandler = async () => {
    const title = titleRef?.current?.value;
    const startHour = startHourRef?.current?.value;
    const startMin = startMinRef?.current?.value;
    const startTime = {
      hour: Number(startHour),
      min: Number(startMin),
    };
    const endHour = endHourRef?.current?.value;
    const endMin = endMinRef?.current?.value;
    const endTime = {
      hour: Number(endHour),
      min: Number(endMin),
    };

    const category = 'develop';
    const isActive = true;
    if (recodeId) {
      await updateTimeRecodeMutation({
        variables: {
          input: {
            id: recodeId,
            userId: userName,
            title,
            startTime,
            endTime,
            category,
            isActive,
          },
        },
      });
    } else {
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
    }

    refetch();
    if (titleRef?.current) {
      titleRef.current.value = '';
    }
    if (startHourRef?.current) {
      startHourRef.current.value = '';
    }
    if (startMinRef?.current) {
      startMinRef.current.value = '';
    }
    if (endHourRef?.current) {
      endHourRef.current.value = '';
    }
    if (endMinRef?.current) {
      endMinRef.current.value = '';
    }
  };

  if (loading) {
    console.log('loading!!');
    return (<></>);
  }
  if (error) {
    console.log('error : ', error);
  }

  if (recodeId !== '') {
    const {
      title, startTime, endTime, category, isActive,
    }: IRecode = onedata.getTimeRecode;
    if (titleRef?.current) {
      titleRef.current.value = title;
    }
    if (startHourRef?.current) {
      startHourRef.current.value = String(startTime.hour);
    }
    if (startMinRef?.current) {
      startMinRef.current.value = String(startTime.min);
    }
    if (endHourRef?.current) {
      endHourRef.current.value = String(endTime?.hour);
    }
    if (endMinRef?.current) {
      endMinRef.current.value = String(endTime?.min);
    }
  }

  return (
    <S.RecodeInput className={className}>
      <S.TitleInput titleRef={titleRef} text={'Title'} />
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
