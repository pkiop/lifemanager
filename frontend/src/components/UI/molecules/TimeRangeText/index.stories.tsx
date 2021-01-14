import React from 'react';
import TimeRangeText from '.';

export default {
  title: 'Molecules/TimeRangeText',
  component: TimeRangeText,
};

export const Default = () => (
  <TimeRangeText startTime={{ hour: 11, min: 30 }} endTime={{ hour: 12, min: 30 }} />
);
