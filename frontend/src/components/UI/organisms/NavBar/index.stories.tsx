import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import NavBar from '.';

export default {
  title: 'Organisms/NavBar',
  component: NavBar,
};

export const Default = () => (
  <GlobalThemeProvider>
    <NavBar navPlusOnClick={() => {}}/>
  </GlobalThemeProvider>
);
