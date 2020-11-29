import React from 'react';
import TimeRangeText from '.';

export default {
  title: 'Molecules/TimeRangeText',
  component: TimeRangeText,
};

export const Default = () => (
  <TimeRangeText startTime={[11, 30]} endTime={[12, 30]} />
);
