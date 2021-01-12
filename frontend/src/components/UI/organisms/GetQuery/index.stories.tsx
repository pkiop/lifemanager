import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import GetQuery, { ITimeRecode } from '.';

export default {
  title: 'Organisms/GetQuery',
  component: GetQuery,
};

const TestData = [
  {
    title: 'lifemanager 개발',
    startTime: {
      hour: 10,
      min: 20,
    },
    endTime: {
      hour: 13,
      min: 0,
    },
    category: 'develop',
    isActive: true,
  },
  {
    title: 'pkiop.me 개발',
    startTime: {
      hour: 14,
      min: 0,
    },
    endTime: {
      hour: 20,
      min: 0,
    },
    category: 'develop',
    isActive: true,
  },
  {
    title: '쉬기',
    startTime: {
      hour: 21,
      min: 0,
    },
    endTime: {
      hour: 22,
      min: 0,
    },
    category: 'rest',
    isActive: false,
  },
] as ITimeRecode[];

export const Default = () => (
  <GlobalThemeProvider>
    <GetQuery timeRecodes={TestData} loading={false} error={null}/>
  </GlobalThemeProvider>
);
