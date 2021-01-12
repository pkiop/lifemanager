import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import RecodeList from '.';

export default {
  title: 'Organisms/RecodeList',
  component: RecodeList,
};

const temp = [
  {
    title: 'lifemanager',
    startTime: { hour: 11, min: 30 },
    endTime: { hour: 12, min: 30 },
    category: 'develop',
    isActive: true,
  },
  {
    title: '낮잠',
    startTime: { hour: 11, min: 30 },
    endTime: { hour: 12, min: 30 },
    category: 'sleep',
    isActive: false,
  },
  {
    title: '부캠',
    startTime: { hour: 11, min: 30 },
    endTime: { hour: 12, min: 30 },
    category: 'develop',
    isActive: true,
  },
];

export const Default = () => (
  <GlobalThemeProvider>
    <RecodeList recodeList={temp} />
  </GlobalThemeProvider>
);
