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
    labelName: 'red',
  },
  {
    color: 'blue',
    labelName: 'blue',
  },
];

const TestLabelsForOverFlow = [
  {
    color: 'red',
    labelName: 'red',
  },
  {
    color: 'blue',
    labelName: 'blue',
  },
  {
    color: 'green',
    labelName: 'green',
  },
  {
    color: 'gray',
    labelName: 'gray',
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
