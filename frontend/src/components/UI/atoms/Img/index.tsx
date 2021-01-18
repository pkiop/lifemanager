import React from 'react';
import * as S from './style';

export interface Props {
  src: any;
  className?: string;
}

function Img({ src, className }: Props) {
  return (
    <>
      <S.Img src={src} className={className} />
    </>
  );
}

export default Img;
