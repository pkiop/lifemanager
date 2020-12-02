import React from 'react';
import { observer } from 'mobx-react';
import * as S from './style';

const App = ({ contents, className }: any) => (
  <S.MainTemplate className={className}>
    <S.HeaderBar />
    {contents}
  </S.MainTemplate>
);

export default observer(App);
