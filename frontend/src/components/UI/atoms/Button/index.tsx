import React, { FC, useCallback } from 'react';
import { Button } from './style';

export interface Props {
  onClick?: any;
  children: any;
  className?: string;
}

const App: FC<Props> = ({ onClick, children, className }) => {
  const onClickHandler = useCallback(
    onClick,
    [],
  );

  return (
    <>
      <Button onClick={onClickHandler} className={className}>
        {children}
      </Button>
    </>
  );
};

export default App;
