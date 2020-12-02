import React, { useCallback } from 'react';
import * as S from './style';

export interface LabelType {
  color?: string;
  children: any;
}

export interface Props extends LabelType {
  onClick?: any;
  className?: string;
}

const App = ({
  color = '#C4C4C4', onClick, children, className,
}: Props) => {
  const onClickHandler = useCallback(onClick, []);

  return (
    <>
      <S.Label color={color} onClick={onClickHandler} className={className}>
        {children}
      </S.Label>
    </>
  );
};

export default App;
