import React from 'react';
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
export const Default = () => <LabelList labelList={TestLabels1} />;
export const Overflow = () => <LabelList labelList={TestLabelsForOverFlow} />;
