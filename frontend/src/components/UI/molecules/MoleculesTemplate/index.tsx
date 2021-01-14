import React from 'react';
import * as S from './style';

export interface Props {
  className?: string;
}

const App = ({ className }: Props) => (
  <S.MoleculesTemplate className={className}></S.MoleculesTemplate>
);

export default App;
