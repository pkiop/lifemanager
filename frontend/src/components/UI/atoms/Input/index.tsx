import React, { useCallback, useState } from 'react';
import { Input } from './style';

export interface Props {
  value?: string;
  placeholder?: string;
  className?: string;
  inputRef?: any;
}

function App({
  value, placeholder, className, inputRef,
}: Props) {
  return (
    <Input
      className={className}
      placeholder={placeholder}
      ref={inputRef}
    />
  );
}

export default App;
