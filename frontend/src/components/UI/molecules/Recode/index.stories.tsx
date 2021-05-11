import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import Recode from '.';

export default {
  title: 'Molecules/Recode',
  component: Recode,
};

const temp = {
  title: 'lifemanager',
  startTime: { hour: 11, min: 30 },
  endTime: { hour: 12, min: 30 },
  category: 'develop',
  isActive: true,
};

export const Default = () => (
  <GlobalThemeProvider>
    <Recode {...temp} />
  </GlobalThemeProvider>
);
