import React from 'react';
import GlobalThemePrivider from '@Styles/GlobalThemeProvider';
import ToggleSwitch from '.';

export default {
  title: 'Atoms/ToggleSwitch',
  component: ToggleSwitch,
};

export const Default = () => (
  <GlobalThemePrivider>
    <ToggleSwitch />
  </GlobalThemePrivider>
);
