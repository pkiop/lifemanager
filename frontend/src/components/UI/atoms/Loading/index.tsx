import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import * as S from './style';

export interface Props {
  className?: string;
}

function Loading({
  className,
}: Props) {
  return (
    <S.Wrap className={className}>
      <ClipLoader size={200} / >
    </S.Wrap >
  );
}

export default Loading;
