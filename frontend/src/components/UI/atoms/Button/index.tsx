import React, { useCallback } from 'react';
import { Button } from './style';

export interface Props {
  onClick?: any;
  children: any;
  className?: string;
}

const App = ({ onClick, children, className }: Props) => {
  const onClickHandler = useCallback(onClick, []);
  console.log('onClickHandler :', onClickHandler);
  return (
    <>
      <Button onClick={onClickHandler} className={className}>
        {children}
      </Button>
    </>
  );
};

export default App;
