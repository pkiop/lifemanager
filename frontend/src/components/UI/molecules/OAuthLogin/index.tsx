import React, { FC, useState, useEffect } from 'react';
import * as S from './style';

export interface Props {
  icon: any;
  ButtonTitle: string;
  onClick?: () => void;
  className?: string;
}

const App = ({
  icon, ButtonTitle, onClick, className,
}: Props) => {
  console.log('temp');

  return (
    <S.LoginButton onClick={onClick} className={className}>
      <S.Icon src={icon} />
      {ButtonTitle}
    </S.LoginButton>
  );
};

export default App;
