import React from 'react';
import GlobalThemeProvider from '@Styles/GlobalThemeProvider';
import RecodeList from '@Organisms/RecodeList';
import MainTemplate from '.';

export default {
  title: 'Template/MainTemplate',
  component: MainTemplate,
};

const temp = [
  {
    title: 'lifemanager',
    startTime: [11, 30],
    endTime: [12, 30],
    category: 'develop',
    isActive: true,
  },
  {
    title: '낮잠',
    startTime: [13, 30],
    endTime: [14, 0],
    category: 'sleep',
    isActive: false,
  },
  {
    title: '부캠',
    startTime: [23, 30],
    endTime: [0, 20],
    category: 'develop',
    isActive: true,
  },
];

const contents = <RecodeList recodeList={temp} />;

export const Default = () => (
  <GlobalThemeProvider>
    <MainTemplate contents={contents} />
  </GlobalThemeProvider>
);
