import React from 'react';
import GlobalThemePrivider from 'styles/GlobalThemeProvider';
import BottomBtns from '.';

export default {
  title: 'Molecules/BottomBtns',
  component: BottomBtns,
};

export const Default = () => (
  <GlobalThemePrivider>
    <BottomBtns />
  </GlobalThemePrivider>
);
