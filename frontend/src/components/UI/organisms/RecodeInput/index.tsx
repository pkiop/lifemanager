import React, { FC } from 'react';
import * as S from './style';

export interface Props {
  className?: string;
}

const App = ({ className }: Props) => (
  <>
    <S.RecodeInput className={className}>
      <div>Headerbar</div>
    </S.RecodeInput>
  </>
);

export default App;
