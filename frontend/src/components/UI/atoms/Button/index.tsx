import React, { FC, useCallback } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: black;
  color: white;
`;

export interface Props {
  title?: string;
  onClick?: any;
}

const App: FC<Props> = ({ title, onClick }) => {
  const onClickHandler = useCallback(
    onClick,
    [],
  );

  return (
    <>
      <Button onClick={onClickHandler}>{title}</Button>
    </>
  );
};

export default App;
