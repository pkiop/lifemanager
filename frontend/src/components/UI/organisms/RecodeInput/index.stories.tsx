import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import RecodeInput from '.';

export default {
  title: 'Organisms/RecodeInput',
  component: RecodeInput,
};

const TestLabels1 = [
  {
    color: 'red',
    children: 'red',
  },
  {
    color: 'blue',
    children: 'blue',
  },
];

const TestLabelsForOverFlow = [
  {
    color: 'red',
    children: 'red',
  },
  {
    color: 'blue',
    children: 'blue',
  },
  {
    color: 'green',
    children: 'green',
  },
  {
    color: 'gray',
    children: 'gray',
  },
];

export const Default = () => (
  <GlobalThemeProvider>
    <RecodeInput labelList={TestLabels1} />
  </GlobalThemeProvider>
);

export const Overflow = () => (
  <GlobalThemeProvider>
    <RecodeInput labelList={TestLabelsForOverFlow} />
  </GlobalThemeProvider>
);
