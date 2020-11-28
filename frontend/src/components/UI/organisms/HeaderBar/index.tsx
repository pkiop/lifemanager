import React, { FC } from 'react';
import * as S from './style';

export interface Props {
  className?: string;
}

const App = ({ className }: Props) => (
  <>
    <S.HeaderBar className={className}>
      <div>Headerbar</div>
    </S.HeaderBar>
  </>
);

export default App;
