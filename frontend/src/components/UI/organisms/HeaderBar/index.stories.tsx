import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import HeaderBar from '.';

export default {
  title: 'Organisms/HeaderBar',
  component: HeaderBar,
};

export const Default = () => (
  <GlobalThemeProvider>
    <HeaderBar />
  </GlobalThemeProvider>
);
