import React, {
  useCallback, useState, useReducer,
} from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import RecodeList from 'components/UI/organisms/RecodeList';
import {
  gql, useMutation, useQuery, useReactiveVar,
} from '@apollo/client';
import { userVar } from 'graphql/localState';
import { listTimeRecodes, getUser } from 'graphql/queries';
import { createUser } from 'graphql/mutations';
import * as S from './style';

function Main() {
  const [clickedRecodeId, setClickedRecodeId] = useState<string>('');
  const [bRecodeInput, toggleBRecodeInput] = useReducer((state: boolean) => !state, false);
  const toggleRecodeInput = useCallback(() => toggleBRecodeInput(), []);
  const plusOnClick = useCallback(() => { toggleBRecodeInput(); setClickedRecodeId(''); }, []);
  const userReactiveVar = useReactiveVar(userVar);
  const {
    loading, error, data, refetch,
  } = useQuery(gql`${listTimeRecodes}`, {
    variables: {
      date: userReactiveVar.selectedDate,
    },
  });
  const {
    loading: userLoading, error: userError, data: userData,
  } = useQuery(gql`${getUser}`);

  // #TODO let 없이 로직 수정하기..
  let tempLabelList = [];
  if (!userLoading && !userError) {
    tempLabelList = userData?.getUser?.items[0]?.categoryList;
  }

  // #TODO Login 시 user정보가 하나도 없는 user라면 카테고리 설정 페이지로 이동
  const [addUserData] = useMutation(gql`${createUser}`);

  if (userError) {
    console.error('userError', userError);
  }
  if (error) {
    console.error('error : ', error);
  }

  const contents = (
    <>
      <RecodeList
        setUpdateRecodeId={setClickedRecodeId}
        timeRecodes={data?.listTimeRecodes?.items}
        toggleRecodeInput={toggleRecodeInput}
        loading={loading}
        error={error} />
      <S.RecodeInput
        selectedDate={userReactiveVar.selectedDate}
        toggleRecodeInput={toggleRecodeInput}
        recodeId={clickedRecodeId}
        labelList={tempLabelList}
        refetch={refetch}
        className={bRecodeInput ? 'active' : ''}/>
      <S.RecodeInputCover onClick={toggleRecodeInput} className={bRecodeInput ? 'active' : ''} />
    </>
  );

  return <MainTemplate contents={contents} navPlusOnClick={plusOnClick} />;
}

export default Main;
