import React from 'react';
import TimeInput from '.';

export default {
  title: 'Molecules/TimeInput',
  component: TimeInput,
};

export const Default = () => (
  <TimeInput startTime={[11, 30]} endTime={[12, 40]} />
);
