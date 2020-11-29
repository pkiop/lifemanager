import React from 'react';
import Recode from '.';

export default {
  title: 'Molecules/Recode',
  component: Recode,
};

const temp = {
  title: 'lifemanager',
  startTime: [11, 30],
  endTime: [12, 30],
  category: 'develop',
  isActive: true,
};

export const Default = () => <Recode {...temp} />;
