import React from 'react';
import * as S from './style';

export interface Props {
  icon: any;
  ButtonTitle: string;
  onClick?: () => void;
  className?: string;
}

const App = ({
  icon, ButtonTitle, onClick, className,
}: Props) => (
  <S.LoginButton onClick={onClick} className={className}>
    <S.Icon src={icon} />
    <S.TitleWrap>{ButtonTitle}</S.TitleWrap>
  </S.LoginButton>
);

export default App;
