/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react';
import { IRecode } from 'components/UI/molecules/Recode';
import { calNowTime, nowHourMin, convertMinute } from 'libs/time';

import 'billboard.js/dist/theme/insight.css';

import bb, { pie } from 'billboard.js';
import * as S from './style';

export interface Props {
  recodeList?: IRecode[];
  categoryList?: any;
  className?: string;
}

const reducer = (acc: any, recode: IRecode) => {
  const nowCategoryName = recode.category;
  const convertMinTime = convertMinute(calNowTime(recode.startTime,
    recode.endTime ? recode.endTime : nowHourMin()));
  if (nowCategoryName in acc) {
    return {
      ...acc,
      [nowCategoryName]: acc[nowCategoryName] + convertMinTime,
    };
  }
  return {
    ...acc,
    [nowCategoryName]: convertMinTime,
  };
};

const colorReducer = (categoryList: any) => (acc: any, recode: IRecode) => {
  const nowCategoryName = recode.category;
  if (nowCategoryName in acc) {
    return acc;
  }
  return {
    ...acc,
    [nowCategoryName]: categoryList.find((el: any) => el.labelName === nowCategoryName)?.color,
  };
};

function PieChart({
  className, recodeList, categoryList,
}: Props) {
  useEffect(() => {
    const categoryData = recodeList?.reduce(reducer, {});
    const colorData = recodeList?.reduce(colorReducer(categoryList), {});
    const dataArray = Object.entries(categoryData || {}).map((el: any) => el);
    bb.generate({
      data: {
        columns: dataArray.length === 0 ? [['데이터 없음', 1]] : dataArray,
        type: pie(),
        colors: JSON.stringify(colorData) === '{}' ? { '데이터 없음': '#dddddd' } : colorData,
      },
      bindto: '#pieChart',
    });
  }, [recodeList]);

  return (
    <S.PieChart id={'pieChart'} />
  );
}

export default PieChart;
