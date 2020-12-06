import React from 'react';
import GlobalThemePrivider from 'styles/GlobalThemeProvider';
import DigitalClock from '.';

export default {
  title: 'Atoms/DigitalClock',
  component: DigitalClock,
};

export const Default = () => (
  <GlobalThemePrivider>
    <DigitalClock />
  </GlobalThemePrivider>
);
