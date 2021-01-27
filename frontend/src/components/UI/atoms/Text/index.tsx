import React from 'react';
import * as S from './style';

export interface Props {
  text?: string;
  className?: string;
}

function Text({ text, className }: Props) {
  return (
    <S.Text className={className}>{text}</S.Text>
  );
}

export default Text;
