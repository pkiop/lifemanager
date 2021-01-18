import React from 'react';
import * as S from './style';

export interface Props {
  onClick?: any;
  children: any;
  className?: string;
}

function Button({ onClick, children, className }: Props) {
  return (
    <>
      <S.Button onClick={onClick} className={className}>
        {children}
      </S.Button>
    </>
  );
}

export default Button;
