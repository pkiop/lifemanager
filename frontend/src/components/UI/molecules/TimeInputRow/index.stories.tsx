import React from 'react';
import TimeInputRow from '.';

export default {
  title: 'Molecules/TimeInputRow',
  component: TimeInputRow,
};

const temp = {
  hour: 9,
  min: 12,
  selectBox: [{ id: 'abcke', value: '개발' }, { id: 'eknxd', value: '운동' }],
  buttonType: 'Update',
};

export const Default = () => <TimeInputRow {...temp} />;
