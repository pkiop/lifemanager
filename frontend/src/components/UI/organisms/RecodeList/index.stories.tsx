import React from 'react';
import RecodeList from '.';

export default {
  title: 'Organisms/RecodeList',
  component: RecodeList,
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

export const Default = () => <RecodeList recodeList={temp} />;
