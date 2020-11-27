import React from 'react';
import * as S from './style';

export interface Props {
  src: any;
  className?: string;
}

const App = ({ src, className }: Props) => {
  console.log('img');

  return (
    <>
      <S.Img src={src} className={className} />
    </>
  );
};

export default App;
