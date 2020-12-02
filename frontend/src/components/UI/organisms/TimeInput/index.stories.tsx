import GlobalThemeProvider from '@Styles/GlobalThemeProvider';
import React from 'react';
import TimeInput from '.';

export default {
  title: 'Organisms/TimeInput',
  component: TimeInput,
};

export const Default = () => (
  <GlobalThemeProvider>
    <TimeInput startTime={[11, 30]} endTime={[12, 40]} />
  </GlobalThemeProvider>
);
