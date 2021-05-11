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
      dateFormat={'yyyy년 M월 d일'}
      className={className}
      selected={new Date(userVar.selectedDate)}
      onChange={(date:Date) => {
        const newDate = new Date();
        newDate.setTime(date.getTime() + (6 * 60 * 60 * 1000));
        setUserVar({ ...userVar, selectedDate: newDate.toISOString().split('T')[0] });
      }
      }

    />);
}

export default DatePicker;
