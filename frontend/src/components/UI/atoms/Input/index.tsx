import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import { Input } from './style';

export interface Props {
  value?: string;
  placeholder?: string;
  className?: string;
}

const App: FC<Props> = ({ value, placeholder, className }) => {
  const [text, setText] = useState(value);
  const onChangeHandler = useCallback(
    (e) => setText(e.target.value),
    [],
  );

  return (
    <Input
      className={className}
      value={text}
      placeholder={placeholder}
      onChange={onChangeHandler} />
  );
};

export default App;
