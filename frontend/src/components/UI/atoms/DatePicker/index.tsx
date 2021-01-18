import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  className?: string;
}
function DatePicker({ className }: Props) {
  const [startDate, setStartDate] = useState<Date>(new Date());

  return (
    <ReactDatePicker
      className={className}
      selected={startDate}
      onChange={(date:Date) => setStartDate(date)}
    />);
}

export default DatePicker;
