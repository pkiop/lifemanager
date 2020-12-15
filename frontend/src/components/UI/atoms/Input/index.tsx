import React, { useCallback, useState } from 'react';
import { Input } from './style';

export interface Props {
  value?: string;
  placeholder?: string;
  className?: string;
  inputRef?: any;
}

const App = ({
  value, placeholder, className, inputRef,
}: Props) => {
  const [text, setText] = useState(value);
  const onChangeHandler = useCallback((e) => setText(e.target.value), []);
  console.log('ref : ', inputRef);
  return (
    <Input
      className={className}
      value={text}
      placeholder={placeholder}
      onChange={onChangeHandler}
      ref={inputRef}
    />
  );
};

export default App;
