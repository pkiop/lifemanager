import React, { useEffect, useRef, useState } from 'react';
import { LabelType } from 'components/UI/atoms/Label';
import { gql, useMutation, useQuery } from '@apollo/client';
import { createTimeRecode, updateTimeRecode, deleteTimeRecode } from 'graphql/mutations';
import { getTimeRecode } from 'graphql/queries';
import { IRecode } from 'components/UI/molecules/Recode';
import { isHour, isMin } from 'libs/time';
import * as S from './style';

export interface Props {
  labelList: LabelType[];
  refetch?: any;
  toggleRecodeInput?: any;
  recodeId: string;
  selectedDate?: any;
  className?: string;
}

function isInputError(
  title: string,
  startHour:string, startMin: string,
  endHour: string | null, endMin: string | null,
  selectedCategory: string,
) {
  if (title === '') {
    return 'title을 입력하세요';
  }
  if (startHour === '' || !isHour(Number(startHour))) {
    return 'startHour을 제대로 입력하세요';
  }
  if (startMin === '' || !isMin(Number(startMin))) {
    return 'startMin을 제대로 입력하세요';
  }
  if (endHour !== null && endHour !== '' && (endMin === null || endMin === '')) {
    return 'endMin을 입력하세요';
  }
  if (endMin !== null && endMin !== '' && (endHour === null || endHour === '')) {
    return 'endHour을 입력하세요';
  }
  if (!isHour(Number(endHour))) {
    return 'endHour을 제대로 입력하세요';
  }
  if (!isMin(Number(endMin))) {
    return 'endMin을 제대로 입력하세요';
  }
  if (selectedCategory === '') {
    return '카테고리를 입력하세요';
  }
  return null;
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
  const [fullFetched, setFullFetched] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const {
    loading, error, data: onedata,
  } = useQuery(gql`${getTimeRecode}`, {
    // TODO: id가 적절한 값이 아닐 때 query보내지 않는 걸 구현
    variables: { id: recodeId === '' ? 'nodata' : recodeId! },
  });
  useEffect(() => {
    setFullFetched(false);
  }, [recodeId]);

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
      hour: endHour ? Number(endHour) : null,
      min: endMin ? Number(endMin) : null,
    };
    const bActive = switchButtonRef?.current?.classList.contains('active');

    const inputErrorMsg = isInputError(
      title!, startHour!, startMin!, endHour!, endMin!, selectedCategory,
    );
    if (inputErrorMsg) {
      setErrorMsg(inputErrorMsg);
      return;
    }
    setErrorMsg('');

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

  if (fullFetched === false && recodeId !== '' && !loading && !error) {
    setFullFetched(true);
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

    setSelectedCategory(category);
    setErrorMsg('');
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
  } else if (fullFetched === false && recodeId === '' && !loading) {
    setFullFetched(true);
    if (titleRef?.current) {
      titleRef.current.value = '';
    }
    if (startHourRef?.current) {
      startHourRef.current.value = `${new Date().getHours()}`;
    }
    if (startMinRef?.current) {
      startMinRef.current.value = `${new Date().getMinutes()}`;
    }
    if (endHourRef?.current) {
      endHourRef.current.value = '';
    }
    if (endMinRef?.current) {
      endMinRef.current.value = '';
    }
    setSelectedCategory('');
    setErrorMsg('');
    if (switchButtonRef?.current?.classList.contains('active') === false) {
      switchButtonRef?.current?.classList.add('active');
    }
  }
  return (
    <S.RecodeInput className={className}>
      <S.TitleInput titleRef={titleRef} errorMsg={errorMsg} text={'Title'} />
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
