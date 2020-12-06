import React from 'react';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import CategorySelectBar from '.';

export default {
  title: 'Organisms/CategorySelectBar',
  component: CategorySelectBar,
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
    <CategorySelectBar labelList={TestLabels1} />
  </GlobalThemeProvider>
);

export const OverFlow = () => (
  <GlobalThemeProvider>
    <CategorySelectBar labelList={TestLabelsForOverFlow} />
  </GlobalThemeProvider>
);
