import React from 'react';
import GlobalThemeProvider from '@Styles/GlobalThemeProvider';
import RecodeInput from '.';

export default {
  title: 'Organisms/RecodeInput',
  component: RecodeInput,
};

export const Default = () => (
  <GlobalThemeProvider>
    <RecodeInput />
  </GlobalThemeProvider>
);
