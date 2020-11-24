import React, { FC, useState, useEffect } from 'react';
import * as S from './style';

export interface Props {
  hour: number;
  min: number;
  selectBox: any;
  buttonType: string;
  className?: string;
}

const App: FC<Props> = ({
  hour, min, buttonType, selectBox, className,
}) => {
  const [goodCategoryList] = useState(selectBox);

  return (
    <>
      <S.TimeInputRow >
        <S.TimeInput value={String(hour)} />
        <S.TimeInput value={String(min)} />
        <S.SelectBox optionList={goodCategoryList}/>
        <S.SubmitButton onClick={() => { alert('클릭'); }}>
          {buttonType}
        </S.SubmitButton>
      </S.TimeInputRow>
    </>
  );
};

export default App;
