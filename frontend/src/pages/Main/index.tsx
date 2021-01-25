import React, {
  useCallback, useState, useReducer, useRef,
} from 'react';
import MainTemplate from 'components/templates/MainTemplate';
import RecodeList from 'components/UI/organisms/RecodeList';
import Board from 'components/UI/organisms/Board';
import {
  gql, useMutation, useQuery, useReactiveVar,
} from '@apollo/client';
import { userVar } from 'graphql/localState';
import { listTimeRecodes, getUser } from 'graphql/queries';
import { createUser } from 'graphql/mutations';
import PieChart from 'components/UI/atoms/PieChart';
import * as S from './style';

function Main() {
  const [clickedRecodeId, setClickedRecodeId] = useState<string>('');
  const [bRecodeInput, toggleBRecodeInput] = useReducer((state: boolean) => !state, false);
  const toggleRecodeInput = useCallback(() => toggleBRecodeInput(), []);
  const plusOnClick = useCallback(() => { toggleBRecodeInput(); setClickedRecodeId(''); }, []);
  const userReactiveVar = useReactiveVar(userVar);
  const bUserUpdating = useRef<boolean>(false);

  const {
    loading, error, data, refetch,
  } = useQuery(gql`${listTimeRecodes}`, {
    variables: {
      date: userReactiveVar.selectedDate,
    },
  });

  const {
    loading: userLoading, error: userError, data: userData, refetch: userRefetch,
  } = useQuery(gql`${getUser}`);

  // #TODO Login 시 user정보가 하나도 없는 user라면 카테고리 설정 페이지로 이동
  const [addUserData] = useMutation(gql`${createUser}`);

  // #TODO let 없이 로직 수정하기..
  let tempGoalTime = 13;
  let tempLabelList = [];
  if (!userLoading && !userError) {
    if (userData) {
      if (userData.getUser.items.length !== 0) {
        tempLabelList = userData.getUser.items[0]?.categoryList;
        tempGoalTime = userData.getUser.items[0]?.goalTime;
      } else if (bUserUpdating.current === false) {
        bUserUpdating.current = true;
        const defaultLabelList = [{ color: '#c70039', labelName: '개발' }, { color: '#111d5e', labelName: '잠' }, { color: '#007965', labelName: '책' }, { color: '#f37121', labelName: '운동' }, { color: '#51c2d5', labelName: '산책' }, { color: '#663f3f', labelName: '기타' }];
        addUserData({
          variables: {
            input: {
              categoryList: defaultLabelList,
              goalTime: 12,
            },
          },
        }).then(() => {
          bUserUpdating.current = false;
          userRefetch();
        });
      }
    }
  }

  if (userError) {
    console.error('userError', userError);
  }
  if (error) {
    console.error('error : ', error);
  }

  if (userLoading || tempLabelList.length === 0) {
    return <></>;
  }

  const contents = (
    <>
      <S.UpperWrap>
        <Board goalTime={tempGoalTime} recodeList={data?.listTimeRecodes?.items}/>
        <PieChart recodeList={data?.listTimeRecodes?.items} categoryList={tempLabelList} />
      </S.UpperWrap>
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
