import React from 'react';
import GlobalThemeProvider from '@Styles/GlobalThemeProvider';
import CategorySelectBar from '.';

export default {
  title: 'Organisms/CategorySelectBar',
  component: CategorySelectBar,
};

export const Default = () => (
  <GlobalThemeProvider>
    <CategorySelectBar />
  </GlobalThemeProvider>
);
