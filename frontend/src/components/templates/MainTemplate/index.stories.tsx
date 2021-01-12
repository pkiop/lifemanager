import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import RecodeList from 'components/UI/organisms/RecodeList';
import MainTemplate from '.';

export default {
  title: 'Template/MainTemplate',
  component: MainTemplate,
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

const contents = <RecodeList recodeList={temp} />;

export const Default = () => (
  <GlobalThemeProvider>
    <MainTemplate contents={contents} />
  </GlobalThemeProvider>
);
