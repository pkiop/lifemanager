import React from 'react';
import TimeRangeText from '.';

export default {
  title: 'Molecules/TimeRangeText',
  component: TimeRangeText,
};

export const Default = () => (
  <TimeRangeText startHour={11} startMin={30} endHour={12} endMin={30} />
);
