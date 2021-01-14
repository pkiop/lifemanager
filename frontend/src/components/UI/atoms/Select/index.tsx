import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Select } from './style';

type optionsType = {
  id: string;
  value: string;
}
export interface Props {
  optionList: optionsType[];
  className?: string;
}

const App: FC<Props> = ({ optionList, className }) => {
  const options = optionList.map((el) => <option key={el.id}>{el.value}</option>);
  return (
    <Select className={className}>
      {options}
    </Select>
  );
};

export default App;
