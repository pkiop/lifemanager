import React from 'react';
import Select from '.';

export default {
  title: 'Atoms/Select',
  component: Select,
};

const optionList = [
  {
    id: 'abcdek',
    value: '개발',
  },
  {
    id: 'dkwlxk',
    value: '책',
  },
  {
    id: 'ekjncn',
    value: '운동',
  },
];

export const Activation = () => <Select optionList={optionList} />;
