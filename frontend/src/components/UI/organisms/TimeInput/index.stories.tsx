import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import React from 'react';
import TimeInput from '.';

export default {
  title: 'Organisms/TimeInput',
  component: TimeInput,
};

export const Default = () => (
  <GlobalThemeProvider>
    <TimeInput startTime={{ hour: 11, min: 30 }} endTime={{ hour: 12, min: 40 }} />
  </GlobalThemeProvider>
);
