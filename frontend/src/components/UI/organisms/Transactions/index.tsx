import React, { useState } from 'react';
import TimeInputRow from 'components/UI/molecules/TimeInputRow';
import {
  Transaction, Row1, RowElse, TitleInput, TimeInput,
} from './style';

export interface Props {
  transactionNumber: number;
  title: string;
  startHour: number;
  startMin: number;
  endHour: number;
  endMin: number;
}

const App = ({
  transactionNumber,
  title,
  startHour,
  startMin,
  endHour,
  endMin,
}: Props) => {
  const [goodCategoryList] = useState([
    { id: 'abcke', value: '개발' },
    { id: 'eknxd', value: '운동' },
  ]);
  const [activeList] = useState([
    { id: 'abckedb', value: '활용' },
    { id: 'eknxddwac', value: '제외' },
  ]);

  const nowTime = `${endHour - startHour}:${endMin - startMin}`;

  return (
    <>
      <Transaction>
        <Row1>{transactionNumber}</Row1>
        <RowElse>
          <TitleInput value={title} />
          <TimeInput value={nowTime} />
        </RowElse>
        <TimeInputRow
          hour={startHour}
          min={startMin}
          selectBox={goodCategoryList}
          buttonType={'Update'}
        />
        <TimeInputRow
          hour={endHour}
          min={endMin}
          selectBox={activeList}
          buttonType={'Delete'}
        />
      </Transaction>
    </>
  );
};

export default App;
