import React from 'react';
import GlobalThemePrivider from 'styles/GlobalThemeProvider';
import Dropdown from '.';

export default {
  title: 'Molecules/Dropdown',
  component: Dropdown,
};

export const Default = () => (
  <GlobalThemePrivider>
    <Dropdown />
  </GlobalThemePrivider>
);
