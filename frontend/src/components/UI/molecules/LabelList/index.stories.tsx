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
