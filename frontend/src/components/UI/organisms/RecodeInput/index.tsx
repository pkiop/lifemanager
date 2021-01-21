import React, { useRef, useState } from 'react';
import { LabelType } from 'components/UI/atoms/Label';
import { gql, useMutation, useQuery } from '@apollo/client';
import { createTimeRecode, updateTimeRecode, deleteTimeRecode } from 'graphql/mutations';
import { getTimeRecode } from 'graphql/queries';
import { IRecode } from 'components/UI/molecules/Recode';
import * as S from './style';

export interface Props {
  labelList: LabelType[];
  refetch?: any;
  toggleRecodeInput?: any;
  recodeId: string;
  selectedDate?: any;
  className?: string;
}

function RecodeInput({
  labelList, refetch, recodeId, toggleRecodeInput, className, selectedDate,
}: Props) {
  const titleRef = useRef<HTMLInputElement>(null);
  const startHourRef = useRef<HTMLInputElement>(null);
  const startMinRef = useRef<HTMLInputElement>(null);
  const endHourRef = useRef<HTMLInputElement>(null);
  const endMinRef = useRef<HTMLInputElement>(null);
  const switchButtonRef = useRef<HTMLDivElement>(null);

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const {
    loading, error, data: onedata,
  } = useQuery(gql`${getTimeRecode}`, {
    // TODO: id가 적절한 값이 아닐 때 query보내지 않는 걸 구현
    variables: { id: recodeId === '' ? 'nodata' : recodeId! },
  });

  const [addTimeRecodeMutation] = useMutation(gql`${createTimeRecode}`);
  const [updateTimeRecodeMutation] = useMutation(gql`${updateTimeRecode}`);
  const [deleteTimeRecodeMutation] = useMutation(gql`${deleteTimeRecode}`);

  const cognitoLastUser = `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_COGNITO_ISP}.LastAuthUser`;
  const cognitoProvider = `CognitoIdentityServiceProvider.${process.env.REACT_APP_AWS_COGNITO_ISP}.${localStorage.getItem(cognitoLastUser)}.userData`;
  const userName = JSON.parse(localStorage.getItem(cognitoProvider)!)?.UserAttributes[3].Value;

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
    const bActive = switchButtonRef?.current?.classList.contains('active');

    if (recodeId) {
      await updateTimeRecodeMutation({
        variables: {
          input: {
            id: recodeId,
            userId: userName,
            title,
            startTime,
            endTime,
            category: selectedCategory,
            isActive: bActive,
          },
        },
      });
    } else {
      await addTimeRecodeMutation({
        variables: {
          input: {
            userId: userName,
            date: selectedDate,
            title,
            startTime,
            endTime,
            category: selectedCategory,
            isActive: bActive,
          },
        },
      });
    }
    refetch();
  };

  const deleteClickHandler = async () => {
    toggleRecodeInput();
    if (recodeId === '') {
      return;
    }
    await deleteTimeRecodeMutation({
      variables: {
        input: {
          id: recodeId,
        },
      },
    });
    refetch();
  };

  let categorySelectBar = (
    <S.CategorySelectBar
      labelList={labelList}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
      switchDivRef={switchButtonRef}
    />);

  if (recodeId !== '' && !loading && !error) {
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

    categorySelectBar = (
      <S.CategorySelectBar
        labelList={labelList}
        selectedCategory={selectedCategory === '' ? category : selectedCategory}
        setSelectedCategory={setSelectedCategory}
        switchDivRef={switchButtonRef}
      />);

    if (isActive) {
      switchButtonRef?.current?.classList.add('active');
    } else {
      switchButtonRef?.current?.classList.remove('active');
    }
  } else if (recodeId === '' && !loading) {
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
    if (switchButtonRef?.current?.classList.contains('active') === false) {
      switchButtonRef?.current?.classList.add('active');
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
      {categorySelectBar}

      <S.BottomBtns
        lgOnClick={onclickHandler}
        lgText={recodeId === '' ? 'Add Recode' : 'Update Recode'}
        smOnClick={deleteClickHandler}
        smText={recodeId === '' ? 'Close' : 'Delete'}
      />
    </S.RecodeInput>
  );
}

export default RecodeInput;
