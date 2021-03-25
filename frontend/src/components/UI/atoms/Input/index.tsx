import React from 'react';
import * as S from './style';

export interface Props {
  value?: string;
  placeholder?: string;
  className?: string;
  inputRef?: any;
}

function Input({
  value, placeholder, className, inputRef,
}: Props) {
  return (
    <S.Input
      className={className}
      placeholder={placeholder}
      ref={inputRef}
    />
  );
}

export default Input;
