import React, { FC } from 'react';
import * as S from './style';

export interface Props {}

const App: FC<Props> = ({ ...props }) => (
  <>
    <S.HeaderBar {...props}>
      <div>hello</div>
    </S.HeaderBar>
  </>
);

export default App;
