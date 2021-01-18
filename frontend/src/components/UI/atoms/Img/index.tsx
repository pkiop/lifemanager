import React from 'react';
import * as S from './style';

export interface Props {
  src: any;
  className?: string;
  onClick?: any;
}

function Img({ src, className, onClick }: Props) {
  return (
    <>
      <S.Img src={src} className={className} onClick={onClick} />
    </>
  );
}

export default Img;
