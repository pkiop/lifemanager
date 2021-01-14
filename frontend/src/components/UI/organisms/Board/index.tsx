import React from 'react';
import * as S from './style';

export interface Props {
  className?: string;
}

const App = ({ className }: Props) => (
  <S.Board className={className}>게시판</S.Board>
);

export default App;
