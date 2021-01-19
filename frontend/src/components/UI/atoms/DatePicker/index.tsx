import React from 'react';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

interface Props {
  userVar: any;
  setUserVar?: any;
  className?: string;
}
function DatePicker({ userVar, setUserVar, className }: Props) {
  return (
    <ReactDatePicker
      dateFormat={'yyyy/MM/dd'}
      className={className}
      selected={new Date(userVar.selectedDate)}
      onChange={(date:Date) => setUserVar({ ...userVar, selectedDate: date.toISOString().split('T')[0] })}
    />);
}

export default DatePicker;
