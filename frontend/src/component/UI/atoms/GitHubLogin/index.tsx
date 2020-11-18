import React, { FC, useCallback, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Button = styled.button`
  background-color: black;
  color: white;
`;

export interface Props {
  title?: string;
}

const App: FC<Props> = ({ title }) => {
  const [Title, setTitle] = useState(title);
  const onClickHandler = useCallback(
    async (e) => {
      const res = await axios.get('http://localhost:3000/test');
      console.log(res);
      setTitle(`${Title}1`);
    },
    [Title],
  );

  return (
    <>
      <Button onClick={onClickHandler}>{Title}</Button>
    </>
  );
};

export default App;
