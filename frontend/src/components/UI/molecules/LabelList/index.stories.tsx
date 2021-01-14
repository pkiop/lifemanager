import React from 'react';
import GlobalThemePrivider from 'styles/GlobalThemeProvider';
import LabelList from '.';

export default {
  title: 'Molecules/LabelList',
  component: LabelList,
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
export function Default() {
  return (
    <GlobalThemePrivider>
      <LabelList labelList={TestLabels1} />
    </GlobalThemePrivider>
  );
}
export function Overflow() {
  return (
    <GlobalThemePrivider>
      <LabelList labelList={TestLabelsForOverFlow} />
    </GlobalThemePrivider>
  );
}
