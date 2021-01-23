/* eslint-disable eqeqeq */
/* eslint-disable no-restricted-syntax */
import React, { useEffect } from 'react';
import { IRecode } from 'components/UI/molecules/Recode';
import { calNowTime, nowHourMin, convertMinute } from 'libs/time';

// base css
import 'billboard.js/dist/theme/insight.css';
// import bb from 'billboard.js';

import bb, { pie } from 'billboard.js';
import * as S from './style';

// for ESM environment, need to import modules as:

export interface Props {
  recodeList?: IRecode[];
  className?: string;
}

interface categoryCollect {

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

function PieChart({
  className, recodeList,
}: Props) {
  useEffect(() => {
    const categoryData = recodeList?.reduce(reducer, {});
    console.log('CD : ', categoryData);

    bb.generate({
      data: {
        columns: [['data', 30], ['data2', 40]],
        type: pie(), // for ESM specify as: pie()
      },
      bindto: '#pieChart',
    });
  }, [recodeList]);

  return (
    <S.PieChart id={'pieChart'} />
  );
}

export default PieChart;
