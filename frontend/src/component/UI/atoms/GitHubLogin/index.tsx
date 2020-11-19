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
    async () => {
      axios.defaults.headers.get['Access-Control-Allow-Origin'] = 'http://127.0.0.1:9000';
      console.log(location.origin);
      const requestURL = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&redirect_uri=${process.env.GITHUB_REDIRECT_URL}`;
      window.location.href = requestURL;
      const config = {
        // headers: {
        //   'Access-Control-Allow-Origin': 'http://localhost:9000',
        // },
        withCredentials: true,
      };
      const res = await axios.get(requestURL, config);
      // const res = await fetch(requestURL);
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
