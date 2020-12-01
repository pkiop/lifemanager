import React, { FC } from 'react';
import * as S from './style';

export interface Props {
  className?: string;
}

const App = ({ className }: Props) => (
  <>
    <S.CategorySelectBar className={className}>
      <div>Headerbar</div>
    </S.CategorySelectBar>
  </>
);

export default App;
